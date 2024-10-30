import React from "react"
import styles from "./Box.module.css"
import { cls } from "../../../utils/classnames"

export const Box: React.FC<React.PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => <div className={cls(styles.box, className)}>{children}</div>
