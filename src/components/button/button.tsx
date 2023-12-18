import { ComponentProps, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

//compound components pattern

type ButtonIcon<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  className?: string
} & ComponentProps<T>

function Icon({ as: Component = 'span', children, className, ...root }: ButtonIcon) {
  const cn = {
    icon: clsx(s.icon, className ? className : ''),
  }

  return (
    <Component className={cn.icon} {...root}>
      {children}
    </Component>
  )
}

type ButtonText<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  className?: string
}
function Text({ as: Component = 'p', children, className, ...root }: ButtonText) {
  const cn = {
    text: clsx(s.text, className ? className : ''),
  }

  return (
    <Component className={cn.text} {...root}>
      {children}
    </Component>
  )
}

type ButtonRoot<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
} & ComponentProps<T>

function Root({ as: Component = 'button', children, className, ...rest }: ButtonRoot) {
  const cn = {
    root: clsx(s.root, className ? className : ''),
  }

  return (
    <Component className={cn.root} {...rest}>
      {children}
    </Component>
  )
}

export const Button = { Icon, Root, Text }
