import { FC } from 'react'

import s from './password-input-item.module.scss'

interface Props {
  onChange: () => void
  type: 'password' | 'text'
  value: string
}
export const PasswordInputItem: FC<Props> = props => {
  const { onChange, type, value } = props

  return <input className={s.item} onChange={onChange} type={type} value={value} />
}
