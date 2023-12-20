import type { Meta } from '@storybook/react'

import { JSX, useState } from 'react'

import { Checkbox } from '@/components/checkbox/checkbox'

const meta = {
  args: {
    checked: true,
    label: 'With label',
  },
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

export const Default: () => JSX.Element = () => {
  const [checked, onChangeChecked] = useState(false)

  const handler = () => {
    console.log(checked)
    onChangeChecked(prevState => !prevState)
  }

  return (
    <>
      <Checkbox checked={checked} onChange={handler} />
    </>
  )
}
//ts-ignore
export const WithLabel: () => JSX.Element = () => {
  const [checked, onChangeChecked] = useState(false)

  const handler = () => {
    console.log(checked)
    onChangeChecked(prevState => !prevState)
  }

  return (
    <>
      <Checkbox checked={checked} disabled={false} label={meta.args.label} onChange={handler} />
    </>
  )
}
