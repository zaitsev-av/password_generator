import type {Meta} from '@storybook/react'

import {JSX, useState} from 'react'
import {Slider} from "@/components/slider/slider";

const meta = {
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta

export const Default: () => JSX.Element = () => {
  const [values, setValues] = useState<[number]>([50])

  const changeSliderValues = (values: [number]) => {
    setValues(values)
    console.log(values)
  }
  return (
   <Slider value={values} onChange={changeSliderValues}/>
  )
}
