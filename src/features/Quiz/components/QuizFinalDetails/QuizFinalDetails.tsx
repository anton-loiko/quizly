import { useMemo } from "react"
import { useQuizStore } from "../../Quiz.store"
import styles from "./QuizFinalDetails.module.css"
import { cls } from "../../../../utils/classnames"

export const QuizFinalDetails = () => {
  const { questions, history } = useQuizStore()

  const data = useMemo(
    () =>
      questions.map(({ id, question, answers }) => ({
        id,
        question,
        answer: answers.find((item) => item.id === history[id]),
      })),
    [history, questions],
  )

  return (
    <ul className={styles.root}>
      {data.map(({ question, id, answer }) => (
        <li key={id} className={styles.item}>
          <b className={styles.title}>{question}:</b>
          <span className={styles.answer}>{answer?.text}</span>{" "}
          <span
            className={cls(
              styles.result,
              answer?.is_correct ? styles.correct : styles.incorrect,
            )}>
            {answer?.is_correct ? "Correct" : "Incorrect"}
          </span>
        </li>
      ))}
    </ul>
  )
}
