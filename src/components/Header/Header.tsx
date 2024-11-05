import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { cls } from "../../utils/classnames"
import { ProfileInfo } from "../../features/Profile/components/ProfileInfo"

export const Header: React.FC<PropsWithClassName> = ({ className }) => (
  <header className={cls(styles.header, className)}>
    <Link to='/' className={styles.logo}>
      <b>QUIZ</b>
      <span>LY</span>
    </Link>

    <ProfileInfo />
  </header>
)
