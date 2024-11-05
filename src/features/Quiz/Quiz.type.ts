export type Answer = {
  text: string
  is_correct: boolean
}

export type Question = {
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
  currentAnswerIndex: number | null
  questions: Question[]
  nextQuestion: () => void
  initQuestions: (questions: Question[]) => void
  incrementScore: () => void
  selectAnswer: (index: number | null) => void
  isLastQuestion: () => boolean
  isCorrectAnswer: () => boolean
}
