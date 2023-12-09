import * as SliderRDX from '@radix-ui/react-slider';
import s from './slider.module.scss'
import {FC} from "react";
import {Label} from "@/components";


interface Props {
  value?: [number]
  onChange?: (value: [number]) => void
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  label?: string
}

export const Slider: FC<Props> = (props) => {
  const {min = 0, max = 50, defaultValue = [12], value, onChange, step = 1, label} = props
  return (
    <form style={{display: "flex", alignItems: "center", justifyContent: "center", gap: '15px'}}>
      {label && <Label label={label}/>}
      <SliderRDX.Root className={s.root} defaultValue={defaultValue} min={min} max={max} step={step} value={value}
                      onValueChange={onChange}>
        <SliderRDX.Track className={s.track}>
          <SliderRDX.Range className={s.range}/>
        </SliderRDX.Track>
        <SliderRDX.Thumb className={s.thumb} aria-label="Volume"/>
      </SliderRDX.Root>
    </form>
  )
};