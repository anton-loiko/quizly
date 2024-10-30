import { Button, ButtonProps } from "../../../../components/common/Button"

import styles from "./QuizOption.module.css"

export const QuizOption: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button className={styles.option} onClick={onClick}>
      {children}
    </Button>
  )
}
