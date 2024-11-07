import { useEffect } from "react"
import { useBlocker } from "react-router-dom"

export type UsePromptNavigateProps = {
  when?: Parameters<typeof useBlocker>[0]
  message?: string
}

export const usePromptNavigate = ({
  when = false,
  message = "Are you sure you want to leave the page?",
}: UsePromptNavigateProps) => {
  const blocker = useBlocker(when)

  useEffect(() => {
    if (blocker.state === "blocked") {
      const proceed = window.confirm(message)
      if (proceed) {
        blocker.proceed()
      } else {
        blocker.reset()
      }
    }
  }, [blocker, message])

  return blocker
}
