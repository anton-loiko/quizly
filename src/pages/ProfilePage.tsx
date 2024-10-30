import { Alert } from "../components/common/Alert"
import { useProfileStore } from "../features/Profile/Profile.store"
import { Profile } from "../features/Profile/Profile"
import { Typo } from "../components/common/Typo"

export const ProfilePage: React.FC = () => {
  const { username, topics } = useProfileStore()

  const shouldShowAlert = !username || !topics.length

  return (
    <>
      {shouldShowAlert && (
        <Alert variant='warning'>Please, complete your profile!</Alert>
      )}

      <Typo component='h1' variant='title' color='main'>
        Profile
      </Typo>
      <Profile />
    </>
  )
}
