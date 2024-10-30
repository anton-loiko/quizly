import React from "react"
import styles from "./Alert.module.css"
import { cls } from "../../../utils/classnames"

type AlertProps = React.PropsWithChildren<
  PropsWithClassName<{
    variant?: "success" | "danger" | "warning" | "info"
    onClose?: () => void
  }>
>

export const Alert: React.FC<AlertProps> = ({
  children,
  className,
  variant = "info",
  onClose,
}) => (
  <div className={cls(styles.alert, className, styles[variant])}>
    {children}

    {onClose && (
      <span className={styles.close} onClick={onClose}>
        &times;
      </span>
    )}
  </div>
)
