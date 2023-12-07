import type { Meta, StoryObj } from '@storybook/react'

import { RadioButton } from './radio-button'

const meta = {
  component: RadioButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/RadioButton',
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    items: [
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
    ],
  },
}
