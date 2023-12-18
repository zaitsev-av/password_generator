import { FC, useState } from 'react'

import { NotVisibleIcon, VisibleIcon } from '@/assets/icons'
import { Button } from '@/components/button/button'
import { PasswordInputItem } from '@/components/password-input-group/password-input-item/password-input-item'

import s from './password-input-group.module.scss'

interface Props {
  value: string
}
export const PasswordInputGroup: FC<Props> = props => {
  const { value } = props
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <div className={s.password}>
      <PasswordInputItem
        onChange={() => {}}
        type={showPassword ? 'text' : 'password'}
        value={value}
      />
      <PassButton onClick={handleShowPassword} showPassword={showPassword} />
    </div>
  )
}

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
