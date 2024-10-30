import { useLoaderData } from "react-router-dom"
import { AppLoading } from "../components/AppLoading"
import { Quiz } from "../features/Quiz/Quiz"
import { useQuizRequest } from "../features/Quiz/Quiz.request"
import { ProtectedQuizLoaderData } from "../features/Quiz/Quiz.type"
import { Profile } from "../features/Profile/Profile"
import { useProfileStore } from "../features/Profile/Profile.store"
import { Typo } from "../components/common/Typo"

export const QuizPage: React.FC = () => {
  const { topics } = useProfileStore()
  const { loading } = useQuizRequest(topics)
  const data = useLoaderData() as ProtectedQuizLoaderData | null

  if (loading) {
    return <AppLoading variant='page' />
  }

  return (
    <>
      <Typo component='h1' variant='title' color='main'>
        Quiz Page
      </Typo>

      {data?.unfilled ? <Profile /> : <Quiz />}
    </>
  )
}
