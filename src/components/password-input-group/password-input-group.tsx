import {FC, useState} from 'react'

import {PasswordInputItem} from '@/components/password-input-group/password-input-item/password-input-item'
import {stringToArray} from '@/utils'

import s from './password-input-group.module.scss'
import {Button} from "@/components/button/button";
import {NotVisibleIcon, VisibleIcon} from "@/assets/icons";

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
      <PassButton showPassword={showPassword} onClick={handleShowPassword}/>
    </div>
  )
}

interface IPassButton {
  showPassword: boolean
  onClick: ()=> void
}

const PassButton: FC<IPassButton> = ({showPassword, onClick}) => {
  return <>
    {showPassword
      ?
      <Button.Root onClick={onClick}>
         <VisibleIcon/>
      </Button.Root>
      :
      <Button.Root onClick={onClick}>
        <NotVisibleIcon/>
      </Button.Root>
    }
  </>
}
