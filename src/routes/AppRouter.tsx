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
import { QuizFinalPage } from "../pages/QuizFinalPage/QuizFinalPage"
import { useAppStore } from "../app/App.store"
import { useQuizStore } from "../features/Quiz/Quiz.store"

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

const protectedLoader: LoaderFunction = ({ request }) => {
  const { isGameStarted } = useAppStore.getState()
  const { username, topics } = useProfileStore.getState()
  const { pathname } = new URL(request.url)

  const unfilled = pathname === PathRoutesEnum.QUIZ_UNFILLED
  const hasData = Boolean(username && topics.length)

  if (!hasData) {
    return unfilled ? null : redirect(PathRoutesEnum.QUIZ_UNFILLED)
  }

  if (unfilled && hasData) {
    return redirect(PathRoutesEnum.QUIZ)
  }

  if (!isGameStarted) {
    return redirect(PathRoutesEnum.ROOT)
  }

  return null
}

const finalLoader: LoaderFunction = () => {
  const { isLastQuestion } = useQuizStore.getState()
  const { isGameStarted } = useAppStore.getState()

  if (isLastQuestion() && !isGameStarted) {
    return null
  }

  return redirect("/")
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
        children: [
          {
            index: true,
            Component: QuizPage,
            loader: protectedLoader,
          },
          {
            path: PathRoutesEnum.QUIZ_UNFILLED,
            Component: QuizPage,
            loader: protectedLoader,
          },
          {
            path: PathRoutesEnum.QUIZ_FINAL,
            Component: QuizFinalPage,
            loader: finalLoader,
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
