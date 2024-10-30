import { create } from "zustand"
import { ProfileData, ProfileStore } from "./Profile.type"

const LOCAL_STORAGE_KEY = "P_D"

export const useProfileStore = create<ProfileStore>((set) => ({
  username: null,
  score: 0,
  topics: [],
  submitUsername: (name = "") => set(() => ({ username: name })),

  addTopic: (value) =>
    set((state) => ({
      topics:
        value && !state.topics.includes(value)
          ? [...state.topics, value]
          : state.topics,
    })),

  removeTopic: (topic) =>
    set((state) => ({
      topics: state.topics.filter((value) => value !== topic),
    })),

  addScore: (value) =>
    set((state) => ({
      score: state.score + value,
    })),

  withdrawScore: (value) =>
    set((state) => ({
      score: state.score - value,
    })),
}))

export const loadPersistedProfileStore = () => {
  const localItem = localStorage.getItem(LOCAL_STORAGE_KEY) ?? ""
  let parsed: ProfileData | null = null

  try {
    parsed = JSON.parse(localItem)
  } catch (error) {
    console.error(error)

    parsed = null
  }

  return parsed
}

export const persistProfileStore = () => {
  const { score, username, topics } = useProfileStore.getState()
  const json = JSON.stringify({ score, username, topics })

  localStorage.setItem(LOCAL_STORAGE_KEY, json)
}
