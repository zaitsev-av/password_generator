import * as SliderRDX from '@radix-ui/react-slider';
import s from './slider.module.scss'
import {FC} from "react";


interface Props {
  value?: [number]
  onChange?: (value: [number]) => void
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
}

export const Slider: FC<Props> = (props) => {
  //todo: закончить слайдер
  const {min = 0, max = 38, defaultValue = [12], value, onChange, step = 1} = props
  return (
    <form>
      <SliderRDX.Root className={s.root} defaultValue={defaultValue} max={max} step={step} value={value}
                      onValueChange={onChange}>
        <SliderRDX.Track className={s.track}>
          <SliderRDX.Range className={s.range}/>
        </SliderRDX.Track>
        <SliderRDX.Thumb className={s.thumb} aria-label="Volume"/>
      </SliderRDX.Root>
    </form>
  )
};