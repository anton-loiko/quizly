import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  redirect,
  Navigate,
  LoaderFunction,
} from "react-router-dom"
import { Home } from "../pages/Home"
import { QuizPage } from "../pages/QuizPage"
import { ProfilePage } from "../pages/ProfilePage"
import { MainLayout } from "../layouts/MainLayout"
import {
  loadPersistedProfileStore,
  useProfileStore,
} from "../features/Profile/Profile.store"
import ErrorBoundary from "../components/ErrorBoundary"
import { AppLoading } from "../components/AppLoading"
import { PathRoutesEnum } from "./AppRouter.enum"

const Root: React.FC = () => (
  <ErrorBoundary>
    <MainLayout>
      <Outlet />
    </MainLayout>
  </ErrorBoundary>
)

const rootLoader: LoaderFunction = () => {
  const profileData = loadPersistedProfileStore()

  if (!useProfileStore.getState().username && profileData) {
    useProfileStore.setState((state) => ({ ...state, ...profileData }))
  }

  return null
}

const protectedLoader: LoaderFunction = ({ params }) => {
  const { username, topics } = useProfileStore.getState()
  const unfilled = params.status === "unfilled"

  if ((!username || !topics.length) && !unfilled) {
    return redirect("/quiz/unfilled")
  }

  if (username && topics.length && unfilled) {
    return redirect("/quiz")
  }

  return unfilled ? { unfilled } : null
}

const router = createBrowserRouter([
  {
    path: PathRoutesEnum.ROOT,
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: PathRoutesEnum.QUIZ,
        Component: QuizPage,
        loader: protectedLoader,
        children: [
          {
            path: ":status",
            Component: QuizPage,
            loader: protectedLoader,
          },
        ],
      },
      {
        path: PathRoutesEnum.PROFILE,
        Component: ProfilePage,
      },
      {
        path: "*",
        element: <Navigate to={PathRoutesEnum.ROOT} replace />,
      },
    ],
  },
])

export const AppRouter: React.FC = () => (
  <RouterProvider
    router={router}
    fallbackElement={<AppLoading variant='page' />}
  />
)
