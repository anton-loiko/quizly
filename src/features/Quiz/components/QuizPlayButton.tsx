import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/common/Button"
import { useAppStore } from "../../../app/App.store"
import { useProfileStore } from "../../Profile/Profile.store"
import { PathRoutesEnum } from "../../../routes/AppRouter.enum"

type QuizPlayButton = PropsWithClassName<{
  canDisabled?: boolean
  submitLabel?: string
}>

export const QuizPlayButton: React.FC<QuizPlayButton> = ({
  canDisabled,
  className,
  submitLabel = "Play",
}) => {
  const navigate = useNavigate()
  const appStore = useAppStore()
  const { topics, username } = useProfileStore()

  const disabled = !canDisabled ? false : !topics.length || !username

  const handleClick = () => {
    if (username && topics.length) {
      appStore.play()
    }

    navigate(PathRoutesEnum.QUIZ)
  }

  return (
    <Button className={className} disabled={disabled} onClick={handleClick}>
      {submitLabel}
    </Button>
  )
}
