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
  label?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox: FC<Props> = props => {
  const { checked, className, disabled, label, onChange } = props

  const cn = {
    indicator: clsx(s.indicator),
    root: clsx(s.root, className),
  }

  return (
    <form>
      <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
        {label && <Label id={'c1'} label={label} />}
        <CheckboxRDX.Root
          checked={checked}
          className={cn.root}
          disabled={disabled}
          id={'c1'}
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
