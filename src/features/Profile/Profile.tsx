import { useCallback } from "react"
import { QuizPlayButton } from "../Quiz/components/QuizPlayButton"
import { useQuizStore } from "../Quiz/Quiz.store"
import { Topic } from "../Quiz/Quiz.type"
import { ProfileForm } from "./components/ProfileForm"
import { useProfileStore } from "./Profile.store"

import styles from "./Profile.module.css"
import { useQuizTopicsRequest } from "../Quiz/Quiz.request"

export const Profile: React.FC = () => {
  const { loading } = useQuizTopicsRequest()
  const { topics: options } = useQuizStore()
  const { username, topics, addTopic, removeTopic, submitUsername } =
    useProfileStore()

  const handleSelect = useCallback(
    (value: Topic) => {
      if (topics.includes(value)) {
        removeTopic(value)
        return
      }

      addTopic(value)
    },
    [addTopic, removeTopic, topics],
  )

  return (
    <div className={styles.root}>
      <ProfileForm
        loading={loading}
        name={username ?? ""}
        options={options}
        topics={topics}
        onUnselect={removeTopic}
        onNameChange={submitUsername}
        onSelect={handleSelect}
      />

      <QuizPlayButton className={styles.action} canDisabled />
    </div>
  )
}
