import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react'

import { EFontSize, EFontWeight } from '@/utils/enums'
import { clsx } from 'clsx'

import s from './typography.module.scss'

interface Props<E extends ElementType> {
  as?: E
  children?: ReactNode
  className?: string
  fontSize?: EFontSize
  fontWeight?: EFontWeight
}
export const Typography = forwardRef(
  <E extends ElementType>(
    props: Props<E> & Omit<ComponentPropsWithoutRef<E>, keyof Props<E>>,
    ref: any
  ) => {
    const {
      as: Component = 'span',
      className,
      fontSize = EFontSize['14px'],
      fontWeight = EFontWeight.Regular,
      ...rest
    } = props

    const cn = {
      root: clsx(s.root, className),
    }

    return <Component className={cn.root} ref={ref} style={{ fontSize, fontWeight }} {...rest} />
  }
)
