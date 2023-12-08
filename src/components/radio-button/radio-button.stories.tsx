import type { Meta } from '@storybook/react'

import { JSX, useState } from 'react'

import { RadioButton, RadioGroupItemType } from '@/components'

const meta = {
  args: {
    onChange: value => console.log(value),
    value: 'Value',
  },
  component: RadioButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/RadioButton',
} satisfies Meta<typeof RadioButton>

export default meta

const items: RadioGroupItemType[] = [
  {
    id: '1',
    label: 'One',
    value: 'one',
  },
  {
    id: '2',
    label: 'Two',
    value: 'two',
  },
  {
    id: '3',
    label: 'Three',
    value: 'three',
  },
]

export const Default: () => JSX.Element = () => {
  const [value, setValue] = useState('three')

  const onChangeHandler = (value: string) => {
    setValue(value)
    console.log(value)
  }

  return (
    <>
      <RadioButton items={items} onChange={onChangeHandler} value={value} />
    </>
  )
}
