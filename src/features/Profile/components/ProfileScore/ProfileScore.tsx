import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRefValue } from "../../../../hooks/useRefValue"

type ProfileScoreProps = {
  score: number
  duration?: number
}

export const ProfileScore = ({ score, duration = 1 }: ProfileScoreProps) => {
  const counterRef = useRef<HTMLSpanElement>(null)
  const { getValue } = useRefValue(score)

  useGSAP(() => {
    if (counterRef.current) {
      gsap.fromTo(
        counterRef,
        { value: getValue() },
        {
          value: score,
          duration,
          roundProps: "value",
          ease: "power3.inOut",
          onUpdate() {
            if (counterRef.current) {
              counterRef.current.innerText = Math.round(
                this.targets()[0].value,
              ).toString()
            }
          },
        },
      )
    }
  }, [score, duration])

  return <span ref={counterRef}>{getValue()}</span>
}
