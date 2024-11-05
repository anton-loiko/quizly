import { forwardRef } from "react"
import styles from "./Button.module.css"
import { cls } from "../../../utils/classnames"

type Color = "default" | "main"

export type ButtonProps = React.PropsWithChildren &
  Pick<
    JSX.IntrinsicElements["button"],
    "onClick" | "disabled" | "className"
  > & { color?: Color; full?: boolean }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, full, color = "default", ...restProps }, ref) => (
    <button
      ref={ref}
      className={cls(
        styles.button,
        styles[`color-${color}`],
        full && styles.full,
        className,
      )}
      {...restProps}>
      {children}
    </button>
  ),
)
