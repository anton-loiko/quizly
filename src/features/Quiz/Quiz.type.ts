export type ProtectedQuizLoaderData = {
  unfilled: boolean
}

export type Answer = {
  text: string
  is_correct: boolean
}

export type Question = {
  question: string
  answers: string[]
}

export type QuestionData = {
  topic: Topic
  questions: Question[]
}
export type QuestionNormalized = Record<Topic, Question[]>

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
  topics: Topic[]
  currentQuestionIndex: number
  questionsList?: QuestionNormalized
  nextQuestion: () => void
}
