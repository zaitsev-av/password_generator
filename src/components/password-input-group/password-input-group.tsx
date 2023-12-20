import { ComponentPropsWithoutRef, ElementType, FC, useState } from 'react'

import { NotVisibleIcon, VisibleIcon } from '@/assets/icons'
import { Button } from '@/components/button/button'

import s from './password-input-group.module.scss'

type Props<T extends ElementType = 'input'> = ComponentPropsWithoutRef<T> & {
  as?: T
  value: string
}
const PasswordInputGroup = <T extends ElementType = 'input'>({ as, value, ...rest }: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false)
  const Input = as || 'input'
  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <div className={s.password}>
      <Input {...rest} className={s.item} type={showPassword ? 'text' : 'password'} value={value} />
      {value && <PassButton onClick={handleShowPassword} showPassword={showPassword} />}
    </div>
  )
}

export default PasswordInputGroup

interface IPassButton {
  onClick: () => void
  showPassword: boolean
}

const PassButton: FC<IPassButton> = ({ onClick, showPassword }) => {
  return (
    <>
      {showPassword ? (
        <Button.Root onClick={onClick}>
          <VisibleIcon />
        </Button.Root>
      ) : (
        <Button.Root onClick={onClick}>
          <NotVisibleIcon />
        </Button.Root>
      )}
    </>
  )
}
