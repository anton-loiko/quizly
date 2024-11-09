import { useEffect } from "react"
import { AppRouter } from "../routes/AppRouter"
import {
  useProfileStore,
  persistProfileStore,
} from "../features/Profile/Profile.store"
import { Analytics } from "@vercel/analytics/react"

export const App = () => {
  useEffect(() => {
    useProfileStore.subscribe(persistProfileStore)
  }, [])

  return (
    <>
      <AppRouter />
      <Analytics />
    </>
  )
}
