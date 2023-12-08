import { FC } from 'react'

import { Typography } from '@/components/typography/typography'
import { EFontSize } from '@/utils/enums'

interface Props {
  className?: string
  fontSize?: EFontSize
  id?: string
  label: string
}
export const Label: FC<Props> = props => {
  const { className, fontSize = EFontSize['14px'], id, label } = props

  return (
    <label htmlFor={id}>
      <Typography className={className} fontSize={fontSize}>
        {label}
      </Typography>
    </label>
  )
}
