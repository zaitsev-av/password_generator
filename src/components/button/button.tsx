import {Component, ComponentProps, ElementType, FC, HTMLAttributes, ReactNode} from "react";
import s from './button.module.scss'
import {clsx} from "clsx";

//compound components pattern

interface Props {
  // Icon?: FC<ButtonIcon>;
};

type ButtonIcon<T extends ElementType= 'span'> = {
  as?: T
  children: ReactNode
  className?: string
}

function Icon ({children, as = Component = 'span', className, ...root}: ButtonIcon ) {

  const cn = {
    icon: clsx(s.icon, className ? className : '')
  }

    return <Component className={cn.icon} {...root}>{children}</Component>;
}

type ButtonText<T extends ElementType = 'p'>  = {
  as?: T
  children: ReactNode
  className?: string
}
function Text ({children, as: Component = 'p', className, ...root }: ButtonText) {
  const cn = {
    text: clsx(s.text, className ? className : '')
  }
  return <Component className={cn.text} {...root}>{children}</Component>;
}

type ButtonRoot<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
} & ComponentProps<T>

function Root ({children, as: Component = 'button', className, ...rest}: ButtonRoot) {

  const cn = {
    root: clsx(s.root, className ? className : '')
  }

  return <Component className={cn.root} {...rest}>{children}</Component>;
}

export const Button = {Icon, Text, Root}
