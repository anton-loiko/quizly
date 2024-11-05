import { useEffect } from "react"
import { unstable_usePrompt } from "react-router-dom"

export type UsePromptNavigateProps = Partial<
  Parameters<typeof unstable_usePrompt>[0]
>

export const usePromptNavigate = ({
  when = false,
  message = "Are you sure you want to leave the page?",
}: UsePromptNavigateProps) => {
  unstable_usePrompt({ when, message })

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // TODO: Try to hook "useBeforeUnload" from "react-router-dom"
      // const whenResult = typeof when === "function" && when()

      if (typeof when !== "function" && when) {
        event.preventDefault()

        if (Object.prototype.hasOwnProperty.call(event, "returnValue")) {
          event.returnValue = message || "" // @deprecated
        }
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [message, when])
}
