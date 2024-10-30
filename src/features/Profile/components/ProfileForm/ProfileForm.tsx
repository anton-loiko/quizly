import { useMemo } from "react"
import styles from "./ProfileForm.module.css"
import { Topic } from "../../../Quiz/Quiz.type"
import { Switch } from "../../../../components/common/Switch"
import { Box } from "../../../../components/common/Box"
import { cls } from "../../../../utils/classnames"
import { Typo } from "../../../../components/common/Typo"

export type ProfileFormProps = PropsWithClassName<{
  name: string
  options: Topic[]
  topics: Topic[]
  onlyUnfilled?: boolean
  onNameChange: (value: string) => void
  onSelect: (value: Topic) => void
  onUnselect: (value: Topic) => void
}>

export const ProfileForm: React.FC<ProfileFormProps> = ({
  className,
  name,
  topics,
  options,
  onUnselect,
  onNameChange,
  onSelect,
}) => {
  const optionsMemoized = useMemo(() => options, [options])

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    onNameChange(event.target.value)
  }

  const handleTopicSelect = (checked: boolean, value: string) => {
    if (checked) {
      onSelect(value as Topic)
    } else {
      onUnselect(value as Topic)
    }
  }

  return (
    <>
      <Box className={cls(styles.root, className)}>
        <Typo component='h3' variant='title3' color='main'>
          User information
        </Typo>

        <Typo component='label' variant='label' bold>
          Name:
          <br />
          <input
            type='text'
            value={name}
            placeholder='Username'
            onChange={handleNameChange}
          />
        </Typo>
      </Box>

      <Box>
        <Typo component='h3' variant='title3' color='main'>
          Topics
        </Typo>

        <ul className={styles.list}>
          {optionsMemoized.map((value) => (
            <li key={value} className={styles.item}>
              <Typo component='b'>{value}</Typo>

              <Switch
                variant='sm'
                value={value}
                onChange={handleTopicSelect}
                checked={topics.includes(value)}
              />
            </li>
          ))}
        </ul>

        {!optionsMemoized.length && (
          <Typo variant='body2' bold center>
            The list of "Topics" is not yet ready
          </Typo>
        )}
      </Box>
    </>
  )
}
