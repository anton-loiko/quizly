import { cls } from "../../../../utils/classnames"
import styles from "./QuizImg.module.css"

export type QuizImgProps = PropsWithClassName<{
  questionId: number
}>

export const QuizImg = ({ questionId, className }: QuizImgProps) => (
  <figure className={styles.root}>
    <img
      className={cls(styles.img, className)}
      src={`/images/questions/question_${questionId}.jpeg`}
      alt={`QuizImg #${questionId}`}
    />
    <figcaption>
      All images created with{" "}
      <a
        href='https://app.leonardo.ai/realtime-gen'
        target='_blank'
        rel='noopener noreferrer'>
        “realtime-gen” on Leonardo AI
      </a>
    </figcaption>
  </figure>
)
