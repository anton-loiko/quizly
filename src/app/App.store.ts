import { create } from "zustand"

type AppStore = {
  isGameStarted: boolean
  play: () => void
  stop: () => void
}

export const useAppStore = create<AppStore>((set) => ({
  isGameStarted: false,
  play: () => set(() => ({ isGameStarted: true })),
  stop: () => set(() => ({ isGameStarted: false })),
}))
