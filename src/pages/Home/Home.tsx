import img from "/puzzle.svg"
import styles from "./Home.module.css"
import { QuizPlayButton } from "../../features/Quiz/components/QuizPlayButton"

export function Home() {
  return (
    <>
      <div className={styles.promo_container}>
        <div className={styles.promo_wrapper}>
          <h1 className={styles.title}>
            Improve
            <br /> your mind
          </h1>

          <p className={styles.promo}>
            Do you like quizes and competitions?
            <br />
            Find quize on any topic!
            <br />
            Play, share and study in one app.
          </p>
        </div>

        <div className={styles.img_wrapper}>
          <img className={styles.img} src={img} alt='Quizly' />
        </div>
      </div>

      <div className={styles.action}>
        <QuizPlayButton />
      </div>
    </>
  )
}
