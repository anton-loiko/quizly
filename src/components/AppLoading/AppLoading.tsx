import { useMemo, useRef } from "react"
import { useGSAP } from "@gsap/react"
import img from "/puzzle.svg"
import styles from "./AppLoading.module.css"
import { fadeInOut } from "../../animations/fade"

type AppLoadingProps = {
  variant?: "page" | "default"
}

export const AppLoading: React.FC<AppLoadingProps> = ({
  variant = "default",
}) => {
  const ref = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    fadeInOut(ref.current)
  })

  const Image = useMemo(
    () => () => <img ref={ref} className={styles.img} src={img} />,
    [],
  )

  return variant === "page" ? (
    <div className={styles.page}>
      <Image />
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image />
      </div>
    </div>
  )
}
