import { FC, useState } from 'react'

import { PasswordInputItem } from '@/components/password-input-group/password-input-item/password-input-item'
import { stringToArray } from '@/utils'

import s from './password-input-group.module.scss'

interface Props {
  value: string
}
export const PasswordInputGroup: FC<Props> = props => {
  const { value } = props
  const [showPassword, setShowPassword] = useState(false)
  const password = stringToArray(value)

  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <div className={s.password}>
      {password.map((el, i) => (
        <PasswordInputItem
          key={i}
          onChange={() => {}}
          type={showPassword ? 'text' : 'password'}
          value={el}
        />
      ))}
      <button onClick={handleShowPassword}>{showPassword ? 'Глаз' : 'Зачеркнуть глаз'}</button>
    </div>
  )
}
