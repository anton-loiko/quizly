import { create } from "zustand"
import { Question, QuizStore } from "./Quiz.type"

export const useQuizStore = create<QuizStore>((set, get) => ({
  score: 0,
  questions: [],
  topics: [],
  currentQuestionIndex: 0,
  currentAnswerId: 0,
  resetState: () =>
    set((state) => ({
      ...state,
      score: 0,
      questions: [],
      topics: [],
      currentQuestionIndex: 0,
      currentAnswerId: 0,
    })),
  incrementScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),
  selectAnswer: (answerId) => set(() => ({ currentAnswerId: answerId })),
  nextQuestion: () =>
    set((state) => ({
      currentAnswerId: null,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    })),
  initQuestions: (questions: Question[]) =>
    set(() => ({
      questions,
      currentQuestionIndex: 0,
      currentAnswerId: null,
    })),
  isLastQuestion: () => {
    const { currentQuestionIndex, questions } = get()

    return (
      currentQuestionIndex > 0 && currentQuestionIndex >= questions.length - 1
    )
  },
  isCorrectAnswer: () => {
    const { currentQuestionIndex, questions, currentAnswerId } = get()

    if (currentAnswerId === null) {
      return false
    }

    return questions[currentQuestionIndex].answers[currentAnswerId].is_correct
  },
}))
