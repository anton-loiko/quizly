import { create } from "zustand"
import { Question, QuizStore } from "./Quiz.type"

export const useQuizStore = create<QuizStore>((set, get) => ({
  score: 0,
  questions: [],
  topics: [],
  currentQuestionIndex: 0,
  currentAnswerIndex: 0,
  incrementScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),
  selectAnswer: (answerIndex) =>
    set(() => ({ currentAnswerIndex: answerIndex })),
  nextQuestion: () =>
    set((state) => ({
      currentAnswerIndex: null,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    })),
  initQuestions: (questions: Question[]) =>
    set(() => ({
      questions,
      currentQuestionIndex: 0,
      currentAnswerIndex: null,
    })),
  isLastQuestion: () => {
    const { currentQuestionIndex, questions } = get()

    return (
      currentQuestionIndex > 0 && currentQuestionIndex >= questions.length - 1
    )
  },
  isCorrectAnswer: () => {
    const { currentQuestionIndex, questions, currentAnswerIndex } = get()

    return (
      currentAnswerIndex !== null &&
      questions[currentQuestionIndex].answers[currentAnswerIndex].is_correct
    )
  },
}))
