import type { Meta } from '@storybook/react'

import { JSX } from 'react'

import { Select } from '@/components/select/select'

const meta = {
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

const items = [
  {
    id: '1',
    name: '5',
  },
  {
    id: '2',
    name: '8',
  },
  {
    id: '3',
    name: '12',
  },
  {
    id: '4',
    name: '15',
  },
  {
    id: '5',
    name: '20',
  },
]

export const Default: () => JSX.Element = () => {
  // const [value, setValue] = useState('three')
  //
  // const onChangeHandler = (value: string) => {
  //   setValue(value)
  //   console.log(value)
  // }

  return (
    <>
      <Select items={items} />
    </>
  )
}
