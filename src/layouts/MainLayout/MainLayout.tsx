import { useMatch } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import styles from "./MainLayout.module.css"
import { PathRoutesEnum } from "../../routes/AppRouter.enum"
import { cls } from "../../utils/classnames"

export const MainLayout: React.FC<Required<React.PropsWithChildren>> = ({
  children,
}) => {
  const match = useMatch(PathRoutesEnum.QUIZ)
  const matched = !!match

  return (
    <>
      <Header className={styles.header} />
      <main className={cls(styles.main, matched && styles.game_mod)}>
        {children}
      </main>
      <Footer className={styles.footer} />
    </>
  )
}
