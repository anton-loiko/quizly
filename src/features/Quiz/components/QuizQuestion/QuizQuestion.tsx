import { useGSAP } from "@gsap/react"
import styles from "./QuizQuestion.module.css"
import { useMemo, useRef } from "react"
import { slideIn } from "../../../../animations/slideIn"
import { useQuizStore } from "../../Quiz.store"
import { QuizOption } from "../QuizOption"
import { Typo } from "../../../../components/common/Typo"
import { shuffleArray } from "../../../../utils/array"

export const QuizQuestion: React.FC = () => {
  const { currentQuestionIndex, questions } = useQuizStore()
  const ref = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    slideIn(ref.current, 3)
  }, [currentQuestionIndex])

  const question = useMemo(() => {
    const { answers: questionAnswers, question: questionTitle } =
      questions[currentQuestionIndex]

    return {
      question: questionTitle,
      answers: shuffleArray(questionAnswers),
    }
  }, [currentQuestionIndex, questions])

  if (!question) {
    return null
  }

  return (
    <>
      <Typo ref={ref} component='h3' variant='title3' color='main' center>
        {question.question}
      </Typo>

      <ul className={styles.list}>
        {question.answers.map((option) => (
          <li className={styles.item} key={option.id}>
            <QuizOption id={option.id}>{option.text}</QuizOption>
          </li>
        ))}
      </ul>
    </>
  )
}
