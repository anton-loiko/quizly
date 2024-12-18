import { useGSAP } from "@gsap/react"
import { useCallback, useRef } from "react"
import { Button, ButtonProps } from "../../../../components/common/Button"

import styles from "./QuizOption.module.css"
import { useQuizStore } from "../../Quiz.store"
import { cls } from "../../../../utils/classnames"
import { fadeIn } from "../../../../animations/fade"
import { Typo } from "../../../../components/common/Typo"

type QuizOptionProps = Omit<ButtonProps, "onClick"> & {
  id: number
  index: number
}

export const QuizOption: React.FC<QuizOptionProps> = ({
  id,
  index,
  children,
}) => {
  const ref = useRef<HTMLButtonElement>(null)

  const { selectAnswer, currentAnswerId, currentQuestionIndex } = useQuizStore()

  const handleClick = useCallback(() => selectAnswer(id), [id, selectAnswer])

  useGSAP(() => {
    fadeIn(ref.current, 1, index / 10)
  }, [currentQuestionIndex])

  return (
    <Button
      ref={ref}
      className={cls(styles.option, currentAnswerId === id && styles.selected)}
      onClick={handleClick}>
      <div className={styles.dot}>{index + 1}</div>
      <Typo
        component='b'
        variant='label'
        color='second'
        className={styles.label}>
        {children}
      </Typo>
    </Button>
  )
}
