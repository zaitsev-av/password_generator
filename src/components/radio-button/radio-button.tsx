import { FC } from 'react'

import { Label } from '@/components'
import { RadioButtonItem } from '@/components/radio-button/radio-button-item'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-button.module.scss'

export type RadioGroupItemType = {
  id: string
  label: string
  value: string
}

interface Props {
  className?: string
  items: RadioGroupItemType[]
  label?: string
  onChange?: (value: string) => void
  value?: string
}

export const RadioButton: FC<Props> = props => {
  const { className, items, label, onChange, value } = props

  const cn = {
    root: clsx(s.root, className),
  }

  return (
    <form style={{ alignItems: 'center', display: 'flex' }}>
      {label && <Label label={label} />}
      <RadioGroup.Root
        className={cn.root}
        defaultValue={'default'}
        onValueChange={onChange}
        value={value}
      >
        <div style={{ alignItems: 'center', display: 'flex' }}>
          {items.map(el => (
            <RadioButtonItem id={el.id} key={el.id} label={el.label} value={el.value} />
          ))}
        </div>
      </RadioGroup.Root>
    </form>
  )
}
