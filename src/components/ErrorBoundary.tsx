import React from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallbackComponent?: React.ComponentType
}

interface ErrorBoundaryState {
  hasError: boolean
}

const Fallback = () => <div>Something went wrong</div>

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render(): React.ReactNode {
    const { hasError } = this.state
    const { children, fallbackComponent: FallbackComponent = Fallback } =
      this.props

    if (hasError) {
      return <FallbackComponent />
    }

    return children
  }
}

export default ErrorBoundary
