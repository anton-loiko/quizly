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
    currentAnswerIndex,
    isCorrectAnswer,
    incrementScore,
    nextQuestion,
    isLastQuestion,
  } = useQuizStore()
  const { stop } = useAppStore()

  const lastQuestion = isLastQuestion()

  const handleNext = useCallback(() => {
    if (isCorrectAnswer()) {
      incrementScore()
    }

    nextQuestion()
  }, [incrementScore, isCorrectAnswer, nextQuestion])

  const handleDone = useCallback(() => {
    stop()
    navigate(PathRoutesEnum.QUIZ_FINAL)
  }, [navigate, stop])

  return (
    <footer className={styles.footer}>
      <Button
        disabled={currentAnswerIndex === null}
        onClick={lastQuestion ? handleDone : handleNext}>
        {lastQuestion ? "Done" : "Answer"}
      </Button>
    </footer>
  )
}
