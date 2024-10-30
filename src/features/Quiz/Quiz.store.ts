import { create } from "zustand"
import { QuizStore } from "./Quiz.type"

export const useQuizStore = create<QuizStore>((set) => ({
  currentQuestionIndex: 0,
  topics: [],
  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    })),
}))
