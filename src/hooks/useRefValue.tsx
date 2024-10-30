import { useCallback, useRef } from "react"

export function useRefValue<V>(defaultValue: V) {
  const ref = useRef(defaultValue)

  const getValue = useCallback(() => ref.current, [])
  const setValue = useCallback((value: V) => (ref.current = value), [])

  return {
    getValue,
    setValue,
  }
}
