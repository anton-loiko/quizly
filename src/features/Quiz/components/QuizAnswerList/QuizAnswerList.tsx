import styles from "./QuizAnswerList.module.css"
import { useMemo } from "react"
import { useQuizStore } from "../../Quiz.store"
import { QuizOption } from "../QuizOption"
import { shuffleArray } from "../../../../utils/array"
import { cls } from "../../../../utils/classnames"
import { QuizActionButton } from "../QuizActionButton"

export const QuizAnswerList: React.FC<PropsWithClassName> = ({ className }) => {
  const currentAnswers = useQuizStore(
    (state) => state.questions[state.currentQuestionIndex]?.answers ?? [],
  )

  const answers = useMemo(() => shuffleArray(currentAnswers), [currentAnswers])

  return (
    <ul className={cls(styles.list, className)}>
      {answers.map((option, index) => (
        <li className={styles.item} key={option.id}>
          <QuizOption id={option.id} index={index}>
            {option.text}
          </QuizOption>
        </li>
      ))}

      <li className={cls(styles.item, styles.action)}>
        <QuizActionButton />
      </li>
    </ul>
  )
}
