import { Topic } from "../Quiz/Quiz.type"

export type ProfileStore = {
  username: string | null
  score: number
  topics: Topic[]
  submitUsername: (name: string) => void
  addTopic: (value: Topic) => void
  removeTopic: (value: Topic) => void
  addScore: (value: number) => void
  withdrawScore: (value: number) => void
}

export type ProfileData = Pick<ProfileStore, "topics" | "score" | "username">
