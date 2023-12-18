import { FC, HTMLAttributes, ReactNode } from 'react'

import s from './card.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
export const Card: FC<Props> = ({ children, ...props }) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.card} {...props}>
        {children}
      </div>
    </div>
  )
}
