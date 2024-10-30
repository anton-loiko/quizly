import { useCallback, useLayoutEffect, useRef } from "react"

type FN<A extends unknown[], R> = (...args: A) => R

export function useEventCallback<A extends unknown[], R>(handler: FN<A, R>) {
  const handlerRef = useRef<FN<A, R> | null>(null)

  useLayoutEffect(() => {
    handlerRef.current = handler
  })

  return useCallback((...args: A) => {
    const fn = handlerRef.current

    if (fn !== null) {
      return fn(...args)
    }

    return
  }, [])
}
