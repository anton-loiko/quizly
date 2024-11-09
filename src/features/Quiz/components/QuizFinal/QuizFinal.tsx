import { Box } from "../../../../components/common/Box"
import { Button } from "../../../../components/common/Button"
import { Typo } from "../../../../components/common/Typo"
import { Confetti } from "../../../../components/Confetti"
import { QuizPlayButton } from "../QuizPlayButton"
import styles from "./QuizFinal.module.css"

import { ReactComponent as StarIcon } from "../../../../assets/star.svg"
import { ReactComponent as BadgeReward } from "../../../../assets/badge-reward.svg"
import { QuizFinalDetails } from "../QuizFinalDetails"
import { useCallback, useState } from "react"

type QuizFinalVariant = "victory" | "defeat"

export type QuizFinalProps = {
  variant: QuizFinalVariant

  score?: number
  onClaimReward?: () => void
}

const finalComponents = new Map<
  QuizFinalVariant,
  (props: Pick<QuizFinalProps, "onClaimReward" | "score">) => JSX.Element
>([
  [
    "victory",
    ({ score = 0, onClaimReward }) => (
      <>
        <Typo component='h3' variant='title3' color='main'>
          You've just earned new stars
        </Typo>
        <div className={styles.container}>
          <Confetti />
          <BadgeReward className={styles.badge} />
        </div>
        <Typo bold color='main' variant='label' className={styles.content}>
          +<StarIcon className={styles.icon} /> {score}
        </Typo>
        <Button full color='main' onClick={onClaimReward}>
          Claim reward
        </Button>
      </>
    ),
  ],
  [
    "defeat",
    () => (
      <>
        <Typo component='p' variant='title' bold center color='main'>
          Defeat
        </Typo>
        <div className={styles.container}>
          <Typo variant='label' bold center>
            Better luck next time
          </Typo>

          <Typo variant='body2' center>
            You may want to try again
          </Typo>

          <QuizPlayButton submitLabel='Try again' />
        </div>
      </>
    ),
  ],
])

export const QuizFinal = ({ variant, ...rest }: QuizFinalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  const Component = finalComponents.get(variant)

  return (
    <Box className={styles.root}>
      <Button onClick={toggle}>{isOpen ? "Hide" : "Show"} details</Button>

      {isOpen ? (
        <QuizFinalDetails />
      ) : (
        <>{Component ? Component(rest) : null}</>
      )}
    </Box>
  )
}
