import { FC, ReactNode } from 'react'

import s from './card.module.scss'

interface Props {
  children: ReactNode
}
export const Card: FC<Props> = ({ children }) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.card}>{children}</div>
    </div>
  )
}
