import {FC, HTMLAttributes, ReactElement, ReactNode} from 'react'

import s from './card.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode
}
export const Card: FC<Props> = ({ children, ...props }) => {
  return (
    <div className={s.cardContainer} {...props}>
      <div className={s.card}>{children}</div>
    </div>
  )
}
