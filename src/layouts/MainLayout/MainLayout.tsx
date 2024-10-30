import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import styles from "./MainLayout.module.css"

export const MainLayout: React.FC<Required<React.PropsWithChildren>> = ({
  children,
}) => (
  <>
    <Header className={styles.header} />
    <main className={styles.main}>{children}</main>
    <Footer className={styles.footer} />
  </>
)
