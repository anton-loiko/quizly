import { useEffect, useState } from "react"
import { useQuizStore } from "./Quiz.store"
import { api } from "../../services/api"
import { Topic } from "./Quiz.type"

export const useQuizRequest = (topics: Topic[] = []) => {
  // Instead it would be better to use ready-made libraries, for example "react-query"
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      try {
        const data = await api.GET("/topics", topics)

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
  }, [topics])

  return { loading }
}
