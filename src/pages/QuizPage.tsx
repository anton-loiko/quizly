import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { AppLoading } from "../components/AppLoading"
import { Quiz } from "../features/Quiz/Quiz"
import { useQuizTopicsRequest } from "../features/Quiz/Quiz.request"
import { Profile } from "../features/Profile/Profile"
import { PathRoutesEnum } from "../routes/AppRouter.enum"

export const QuizPage: React.FC = () => {
  const { pathname } = useLocation()
  const { loading } = useQuizTopicsRequest()

  const unfilled = useMemo(
    () => pathname === PathRoutesEnum.QUIZ_UNFILLED,
    [pathname],
  )

  if (loading) {
    return <AppLoading variant='page' />
  }

  return <>{unfilled ? <Profile /> : <Quiz />}</>
}
