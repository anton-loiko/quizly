import { cls } from "../../utils/classnames"
import styles from "./Footer.module.css"

type FooterProps = { className?: string }

export const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className={cls(styles.footer, className)}>© 2024 Quizly</footer>
)
