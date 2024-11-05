import { useEffect, useState } from "react"
import { useQuizStore } from "./Quiz.store"
import { api } from "../../services/api"
import { Question, Topic } from "./Quiz.type"

export const useQuizTopicsRequest = () => {
  // Instead it would be better to use ready-made libraries, for example "react-query"
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      try {
        const data = await api.GET("/topics")

        useQuizStore.setState({
          topics: data,
        })

        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    init()
  }, [])

  return { loading }
}

type UseQuizQuestionsRequestOptions = {
  onSuccess?: (data: Question[]) => void
}

export const useQuizQuestionsRequest = (
  topics: Topic[] = [],
  { onSuccess }: UseQuizQuestionsRequestOptions = {},
) => {
  // Instead it would be better to use ready-made libraries, for example "react-query"
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Question[]>([])

  useEffect(() => {
    const init = async () => {
      try {
        const questionsResponse = await api.GET("/questions", topics)
        const questions = questionsResponse.flatMap((value) => value.questions)

        setData(questions)

        if (onSuccess) {
          onSuccess(questions)
        }

        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    init()
  }, [onSuccess, topics])

  return { loading, data }
}
