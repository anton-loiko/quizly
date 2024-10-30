import { createElement } from "react"

import { cls } from "../../../utils/classnames"
import styles from "./Typo.module.css"

type TypoComponent = keyof Pick<
  React.ReactHTML,
  "label" | "b" | "p" | "h1" | "h3"
>
type TypoVariant = "body" | "body2" | "title" | "title3" | "label"
type TypoColor = "default" | "main"

type TypoProps<P = object> = React.PropsWithChildren<
  PropsWithClassName<{
    component?: TypoComponent
    variant?: TypoVariant
    color?: TypoColor
    bold?: boolean
    center?: boolean
  }>
> &
  P

// A small example of a component with typography
export const Typo: React.FC<TypoProps> = ({
  bold,
  center,
  children,
  className,
  color = "default",
  component = "p",
  variant = "body",
  ...props
}) =>
  createElement(
    component,
    {
      className: cls(
        styles.root,
        styles[variant],
        styles[`color-${color}`],
        bold && styles.bold,
        center && styles.center,
        className,
      ),
      ...props,
    },
    children,
  )
