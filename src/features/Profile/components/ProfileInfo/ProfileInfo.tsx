import { useNavigate } from "react-router-dom"
import { ReactComponent as Star } from "../../../../assets/star.svg"
import { useProfileStore } from "../../Profile.store"
import styles from "./ProfileInfo.module.css"
import { PathRoutesEnum } from "../../../../routes/AppRouter.enum"

export const ProfileInfo = () => {
  const { username, score } = useProfileStore()
  const navigate = useNavigate()

  const handleClick = () => navigate(PathRoutesEnum.PROFILE)

  return (
    <div className={styles.root} onClick={handleClick}>
      <span>{username || "Hey, Buddy"}</span>
      <span>|</span>
      <Star className={styles.icon} />
      {score}
    </div>
  )
}
