import { QuestionData, Topic } from "../features/Quiz/Quiz.type"
import mock_data from "./__mock_topics__.json"

type Path = "/topics" | "/questions"

type ResultByPath<T extends Path> = T extends "/topics"
  ? Topic[]
  : QuestionData[]

// type T = infer Path ? Result:Path
// Just for mock API
class RequestClass {
  async GET<T extends Path>(path: T, by?: Topic | Topic[]) {
    return new Promise<ResultByPath<T>>((resolve, reject) => {
      try {
        const data = mock_data.data as unknown as QuestionData[]

        let result

        switch (path) {
          case "/topics": {
            result = data.map((value) => value.topic.toLowerCase())
            break
          }

          case "/questions": {
            if (typeof by === "string") {
              result = data.filter((value) => value.topic === by)
            } else if (Array.isArray(by)) {
              result = data.filter((value) =>
                by.includes(value.topic.toLowerCase() as Topic),
              )
            } else {
              result = data
            }

            break
          }

          default:
            throw new Error("Invalid path")
        }

        setTimeout(() => {
          resolve(result as ResultByPath<T>)
        }, 500)
      } catch (error) {
        console.error("RequestClass::ERROR:: ", error)
        reject(error)
      }
    })
  }
}

export const api = new RequestClass()
