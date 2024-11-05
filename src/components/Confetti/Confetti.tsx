import { useMemo, useRef } from "react"
import styles from "./Confetti.module.css"
import { useGSAP } from "@gsap/react"
import { cls } from "../../utils/classnames"
import gsap from "gsap"

const CONFETTI_COUNT = 100

const getRandomColor = () => {
  const colors = ["#ff0", "#0f0", "#00f", "#f0f", "#f90", "#0ff"]

  return colors[Math.floor(Math.random() * colors.length)]
}

export const Confetti = () => {
  const confettiRef = useRef<(HTMLDivElement | null)[]>([])

  const createdConfetti = useMemo(() => {
    const confettiElements = Array.from({ length: CONFETTI_COUNT }).map(
      (_, index) => (
        <div
          key={index}
          className={cls(
            styles.confetti,
            index % 2 == 0 && styles.confetti_dot,
          )}
          style={{ backgroundColor: getRandomColor() }}
          ref={(el) => {
            confettiRef.current[index] = el
          }}
        />
      ),
    )

    return confettiElements
  }, [])

  useGSAP(() => {
    confettiRef.current.forEach((confetti, index) => {
      gsap.fromTo(
        confetti,
        {
          x: 0,
          y: 0,
          rotation: 0,
        },
        {
          x: `random(-300, 300)`,
          y: `random(-200, 300)`,
          rotation: `random(-360, 360)`,
          duration: 2,
          delay: index * 0.02,
          ease: "power1.out",
        },
      )
    })
  })

  return <div className={styles.root}>{createdConfetti}</div>
}
