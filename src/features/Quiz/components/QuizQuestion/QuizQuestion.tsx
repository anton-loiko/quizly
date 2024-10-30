import styles from "./QuizQuestion.module.css"

export const QuizQuestion: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <h2 className={styles.question}>{children}</h2>
}
