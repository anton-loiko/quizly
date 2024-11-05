import { useCallback, useMemo } from "react"
import styles from "./QuizFinalPage.module.css"
import { useQuizStore } from "../../features/Quiz/Quiz.store"
import { useProfileStore } from "../../features/Profile/Profile.store"
import { useNavigate } from "react-router-dom"
import { PathRoutesEnum } from "../../routes/AppRouter.enum"
import { QuizFinal } from "../../features/Quiz/components/QuizFinal"

export const QuizFinalPage: React.FC = () => {
  const score = useQuizStore((state) => state.score)
  const { addScore } = useProfileStore()
  const navigate = useNavigate()

  const finalVariant = useMemo(
    () => (score > 0 ? "victory" : "defeat"),
    [score],
  )

  const handleClaimReward = useCallback(() => {
    addScore(score)
    navigate(PathRoutesEnum.ROOT)
  }, [addScore, navigate, score])

  return (
    <div className={styles.root}>
      <QuizFinal
        score={score}
        variant={finalVariant}
        onClaimReward={handleClaimReward}
      />
    </div>
  )
}
