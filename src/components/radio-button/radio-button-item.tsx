import { FC } from 'react'

import { Label } from '@/components/label'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from '@/components/radio-button/radio-button.module.scss'

interface Props {
  disabled?: boolean
  id: string
  label: string
  required?: boolean
  value: string
}

export const RadioButtonItem: FC<Props> = props => {
  const { disabled, id, label, value } = props

  const cn = {
    container: clsx(s.container),
    item: clsx(disabled ? '' : s.item),
    label: clsx(s.label),
  }

  return (
    <div className={s.container}>
      <RadioGroup.Item className={cn.item} id={id} value={value}>
        <RadioGroup.Indicator className={s.indicator} />
      </RadioGroup.Item>
      <Label className={cn.label} id={id} label={label} />
    </div>
  )
}
