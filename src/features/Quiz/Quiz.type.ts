export type Answer = {
  id: number
  text: string
  is_correct: boolean
}

export type Question = {
  id: number
  question: string
  answers: Answer[]
}

export type QuestionData = {
  topic: Topic
  questions: Question[]
}

export type Topic =
  | "history"
  | "movies"
  | "video games"
  | "board games"
  | "science"
  | "geography"
  | "technology"
  | "literature"
  | "music"
  | "sports"

export type QuizStore = {
  score: number
  topics: Topic[]
  currentQuestionIndex: number
  currentAnswerId: number | null
  questions: Question[]
  history: Record<number, number | null>
  nextQuestion: () => void
  initQuestions: (questions: Question[]) => void
  incrementScore: () => void
  selectAnswer: (index: number | null) => void
  isLastQuestion: () => boolean
  isCorrectAnswer: () => boolean
  resetState: () => void
}
