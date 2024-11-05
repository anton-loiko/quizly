import { useCallback } from "react"
import { Button } from "../../../../components/common/Button"
import { useQuizStore } from "../../Quiz.store"
import styles from "./QuizFooter.module.css"
import { useNavigate } from "react-router-dom"
import { PathRoutesEnum } from "../../../../routes/AppRouter.enum"
import { useAppStore } from "../../../../app/App.store"

export const QuizFooter: React.FC = () => {
  const navigate = useNavigate()
  const {
    currentAnswerId,
    isCorrectAnswer,
    incrementScore,
    nextQuestion,
    isLastQuestion,
  } = useQuizStore()
  const { stop } = useAppStore()

  const lastQuestion = isLastQuestion()

  const reward = useCallback(() => {
    if (isCorrectAnswer()) {
      incrementScore()
    }
  }, [incrementScore, isCorrectAnswer])

  const handleNext = useCallback(() => {
    reward()
    nextQuestion()
  }, [nextQuestion, reward])

  const handleDone = useCallback(() => {
    reward()
    stop()
    navigate(PathRoutesEnum.QUIZ_FINAL)
  }, [navigate, stop, reward])

  return (
    <footer className={styles.footer}>
      <Button
        disabled={currentAnswerId === null}
        onClick={lastQuestion ? handleDone : handleNext}>
        {lastQuestion ? "Done" : "Answer"}
      </Button>
    </footer>
  )
}
