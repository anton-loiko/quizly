import { useEffect } from "react"
import { useQuizStore } from "./Quiz.store"
import { useQuizQuestionsRequest } from "./Quiz.request"
import styles from "./Quiz.module.css"
import { QuizProgress } from "./components/QuizProgress"
import { QuizFooter } from "./components/QuizFooter"
import { useProfileStore } from "../Profile/Profile.store"
import { QuizQuestion } from "./components/QuizQuestion"
import { AppLoading } from "../../components/AppLoading"
import { shuffleArray } from "../../utils/array"
import { useAppStore } from "../../app/App.store"
import { usePromptNavigate } from "../../hooks/usePromptNavigate"
import { BlockerFunction } from "react-router-dom"
import { PathRoutesEnum } from "../../routes/AppRouter.enum"

const createWhenCallback =
  (isGameStarted: boolean): BlockerFunction =>
  ({ currentLocation, nextLocation, historyAction }) => {
    if (
      historyAction === "PUSH" &&
      currentLocation.pathname === PathRoutesEnum.QUIZ &&
      nextLocation.pathname === PathRoutesEnum.QUIZ_FINAL
    ) {
      return false
    }

    return isGameStarted
  }

export const Quiz: React.FC = () => {
  const { topics } = useProfileStore()
  const { isGameStarted } = useAppStore()
  const { initQuestions, resetState, questions } = useQuizStore()
  const { data, loading } = useQuizQuestionsRequest(topics)

  usePromptNavigate({
    when: createWhenCallback(isGameStarted),
    message:
      "Are you sure you want to leave the page? \nYour points will not be saved.",
  })

  useEffect(() => {
    resetState()
  }, [resetState])

  useEffect(() => {
    initQuestions(shuffleArray(data))
  }, [data, initQuestions])

  if (loading || !questions.length) {
    return <AppLoading variant='page' />
  }

  return (
    <section className={styles.root}>
      <QuizProgress />
      <QuizQuestion />
      <QuizFooter />
    </section>
  )
}
