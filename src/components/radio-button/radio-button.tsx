import { FC } from 'react'

import { RadioButtonItem } from '@/components/radio-button/radio-button-item'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-button.module.scss'

interface Props {
  text: string
}

export const RadioButton: FC<Props> = props => {
  const { text } = props

  const cn = {
    root: clsx(s.root),
  }

  return (
    <form>
      <RadioGroup.Root className={cn.root} defaultValue={'default'}>
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <RadioButtonItem id={'1r'} label={text} value={'1'} />
        </div>
      </RadioGroup.Root>
    </form>
  )
}
