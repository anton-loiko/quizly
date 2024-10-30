import React from "react"
import styles from "./Button.module.css"
import { cls } from "../../../utils/classnames"

export type ButtonProps = React.PropsWithChildren &
  Pick<JSX.IntrinsicElements["button"], "onClick" | "disabled" | "className">

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...restProps
}) => (
  <button className={cls(styles.button, className)} {...restProps}>
    {children}
  </button>
)
