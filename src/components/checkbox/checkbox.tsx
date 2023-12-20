import { FC } from 'react'

import { CheckIcon } from '@/assets/icons'
import { Label } from '@/components'
import * as CheckboxRDX from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

interface Props {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox: FC<Props> = props => {
  const { checked, className, disabled, id, label, onChange } = props

  const cn = {
    indicator: clsx(s.indicator),
    root: clsx(s.root, className),
  }

  return (
    <form>
      <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
        {label && <Label id={id} label={label} />}
        <CheckboxRDX.Root
          checked={checked}
          className={cn.root}
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
        >
          <CheckboxRDX.Indicator className={cn.indicator}>
            <CheckIcon />
          </CheckboxRDX.Indicator>
        </CheckboxRDX.Root>
      </div>
    </form>
  )
}
