import { FC, ReactNode, forwardRef } from 'react'

import { CheckIcon } from '@/assets/icons'
import { Typography } from '@/components/typography/typography'
import { EFontSize, EFontWeight } from '@/utils/enums'
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
      <Select.ItemText>
        <Typography fontSize={EFontSize['16px']} fontWeigth={EFontWeight.Bold}>
          {children}
        </Typography>
      </Select.ItemText>
      <Select.ItemIndicator>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})
