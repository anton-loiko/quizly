import { useGSAP } from "@gsap/react"
import { useCallback, useRef } from "react"
import { Button, ButtonProps } from "../../../../components/common/Button"

import styles from "./QuizOption.module.css"
import { useQuizStore } from "../../Quiz.store"
import { cls } from "../../../../utils/classnames"
import { fadeIn } from "../../../../animations/fade"

type QuizOptionProps = Omit<ButtonProps, "onClick"> & {
  id: number
}

export const QuizOption: React.FC<QuizOptionProps> = ({ id, children }) => {
  const ref = useRef<HTMLButtonElement>(null)

  const { selectAnswer, currentAnswerId, currentQuestionIndex } = useQuizStore()

  const handleClick = useCallback(() => selectAnswer(id), [id, selectAnswer])

  useGSAP(() => {
    fadeIn(ref.current, 1, 1 + id / 3)
  }, [currentQuestionIndex])

  return (
    <Button
      ref={ref}
      className={cls(styles.option, currentAnswerId === id && styles.selected)}
      onClick={handleClick}>
      {children}
    </Button>
  )
}
