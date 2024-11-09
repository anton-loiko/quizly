import { useCallback } from "react"
import { Button } from "../../../components/common/Button"
import { useQuizStore } from "../Quiz.store"
import { useNavigate } from "react-router-dom"
import { PathRoutesEnum } from "../../../routes/AppRouter.enum"
import { useAppStore } from "../../../app/App.store"

export const QuizActionButton: React.FC<PropsWithClassName> = ({
  className,
}) => {
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
    handleNext()
    stop()
    navigate(PathRoutesEnum.QUIZ_FINAL)
  }, [navigate, stop, handleNext])

  return (
    <Button
      className={className}
      disabled={currentAnswerId === null}
      onClick={lastQuestion ? handleDone : handleNext}>
      {lastQuestion ? "Done" : "Next"}
    </Button>
  )
}
