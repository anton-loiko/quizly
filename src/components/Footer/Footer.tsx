import { cls } from "../../utils/classnames"
import styles from "./Footer.module.css"

export const Footer: React.FC<PropsWithClassName> = ({ className }) => (
  <footer className={cls(styles.footer, className)}>© 2024 Quizly</footer>
)
