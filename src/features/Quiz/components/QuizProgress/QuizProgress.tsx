import { useRef } from "react"
import { useQuizStore } from "../../Quiz.store"
import styles from "./QuizProgress.module.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const QuizProgress: React.FC = () => {
  const ref = useRef<HTMLProgressElement>(null)
  const { currentQuestionIndex, questions } = useQuizStore()

  useGSAP(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        value: currentQuestionIndex,
        duration: 1,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current?.value) {
            // eslint-disable-next-line no-self-assign
            ref.current.value = ref.current.value
          }
        },
      })
    }
  }, [currentQuestionIndex])

  return (
    <div className={styles.root}>
      <progress
        ref={ref}
        className={styles.progress}
        value={0}
        max={questions.length}
      />
    </div>
  )
}
