import { useEffect } from "react"
import { AppRouter } from "../routes/AppRouter"
import {
  useProfileStore,
  persistProfileStore,
} from "../features/Profile/Profile.store"

export const App = () => {
  useEffect(() => {
    useProfileStore.subscribe(persistProfileStore)
  }, [])

  return <AppRouter />
}
