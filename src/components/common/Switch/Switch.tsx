import { cls } from "../../../utils/classnames"
import styles from "./Switch.module.css"

type SwitchVariant = "sm" | "md"
export type SwitchProps = Pick<JSX.IntrinsicElements["input"], "checked"> & {
  variant?: SwitchVariant
  value: string
  onChange: (checked: boolean, value: string) => void
}

export const Switch: React.FC<SwitchProps> = ({
  variant = "md",
  checked = false,
  value,
  onChange,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    onChange(event.target.checked, value)

  return (
    <label className={cls(styles.switch, styles[variant])}>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <span className={styles.slider} />
    </label>
  )
}
