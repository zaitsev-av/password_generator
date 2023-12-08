import { FC } from 'react'

import { ChevronIcon } from '@/assets/icons'
import { SelectItem } from '@/components/select/item/select-item'
import * as SelectRdx from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectItemsType = {
  id: string
  name: string
}

interface Props {
  disabled?: boolean
  items: SelectItemsType[]
  label?: string
}

export const Select: FC<Props> = props => {
  const { disabled, items, label } = props

  return (
    <SelectRdx.Root>
      <SelectRdx.Trigger aria-label={'Password len'} className={s.trigger}>
        <SelectRdx.Value placeholder={'Select a fruit…'} />
        <SelectRdx.Icon>
          <ChevronIcon />
        </SelectRdx.Icon>
      </SelectRdx.Trigger>
      <SelectRdx.Portal>
        <SelectRdx.Content className={s.content}>
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
  )
}
