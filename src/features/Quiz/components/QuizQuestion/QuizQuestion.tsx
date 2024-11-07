import { useGSAP } from "@gsap/react"
import styles from "./QuizQuestion.module.css"
import { useRef } from "react"
import { slideIn } from "../../../../animations/slideIn"
import { useQuizStore } from "../../Quiz.store"
import { Typo } from "../../../../components/common/Typo"
import { QuizAnswerList } from "../QuizAnswerList"
import { QuizImg } from "../QuizImg"

export const QuizQuestion: React.FC = () => {
  const question = useQuizStore(
    (state) => state.questions[state.currentQuestionIndex],
  )
  const ref = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    slideIn(ref.current, 3)
  }, [question])

  if (!question) {
    return null
  }

  return (
    <div className={styles.root}>
      <Typo
        className={styles.question}
        ref={ref}
        component='h3'
        variant='title'
        color='second'>
        {question.question}
      </Typo>

      <QuizImg className={styles.img} questionId={question.id} />

      <QuizAnswerList className={styles.answers} />
    </div>
  )
}
