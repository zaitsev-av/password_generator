import { CSSProperties, FC } from 'react'

import { ChevronIcon } from '@/assets/icons'
import { Label } from '@/components/label'
import { SelectItem } from '@/components/select/item/select-item'
import * as SelectRdx from '@radix-ui/react-select'

import s from './select.module.scss'

export type SelectItemsType = {
  id: string
  name: string
}

interface Props {
  disabled?: boolean
  items: SelectItemsType[]
  label?: string
  onChange?: (value: string) => void
  value?: string
  width?: CSSProperties['width']
}

export const Select: FC<Props> = props => {
  const { disabled, items, label, onChange, value, width = '100px' } = props

  return (
    <div style={{ alignItems: 'center', display: 'flex', gap: '10px', justifyContent: 'center' }}>
      {label && <Label label={label} />}
      <SelectRdx.Root onValueChange={onChange} value={value}>
        <SelectRdx.Trigger
          aria-label={'Password len'}
          className={s.trigger}
          style={{ width: width }}
        >
          <SelectRdx.Value className={s.value} placeholder={items[3].name} />
          <SelectRdx.Icon className={s.icon} data-state={disabled ? 'disabled' : 'not-disabled'}>
            <ChevronIcon />
          </SelectRdx.Icon>
        </SelectRdx.Trigger>
        <SelectRdx.Portal>
          <SelectRdx.Content
            className={s.content}
            position={'popper'}
            side={'bottom'}
            sideOffset={0}
          >
            <SelectRdx.Viewport className={s.viewport}>
              {items.map(el => (
                <SelectItem key={el.id} value={el.id}>
                  {el.name}
                </SelectItem>
              ))}
            </SelectRdx.Viewport>
          </SelectRdx.Content>
        </SelectRdx.Portal>
      </SelectRdx.Root>
    </div>
  )
}
