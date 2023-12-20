import { FC } from 'react'

import { Label } from '@/components'
import * as SliderRDX from '@radix-ui/react-slider'

import s from './slider.module.scss'

interface Props {
  defaultValue?: number[]
  label?: string
  max?: number
  min?: number
  onChange?: (value: [number]) => void
  step?: number
  value?: [number]
}

export const Slider: FC<Props> = props => {
  const { defaultValue = [12], label, max = 50, min = 0, onChange, step = 1, value } = props

  return (
    <div className={s.box}>
      {label && <Label label={label} />}
      <SliderRDX.Root
        className={s.root}
        defaultValue={defaultValue}
        max={max}
        min={min}
        onValueChange={onChange}
        step={step}
        value={value}
      >
        <SliderRDX.Track className={s.track}>
          <SliderRDX.Range className={s.range} />
        </SliderRDX.Track>
        <SliderRDX.Thumb aria-label={'Volume'} className={s.thumb} />
      </SliderRDX.Root>
      <div className={s.counter}>{value}</div>
    </div>
  )
}
