import { FC, ReactNode, forwardRef } from 'react'

import { CheckIcon } from '@/assets/icons'
import * as Select from '@radix-ui/react-select'
import { SelectItemProps } from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './item.module.scss'

interface Props extends SelectItemProps {
  children: ReactNode
  className?: string
}

export const SelectItem: FC<Props> = forwardRef(({ children, className, ...props }, ref: any) => {
  const cn = {
    item: clsx(s.item, className),
  }

  return (
    <Select.Item className={cn.item} {...props} ref={ref}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={'SelectItemIndicator'}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})
