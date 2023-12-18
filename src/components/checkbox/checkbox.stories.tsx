import type { Meta, StoryObj } from '@storybook/react'

import { PasswordInputGroup } from '@/components/password-input-group/password-input-group'
import Checkbox from "@/components/checkbox/checkbox";

const meta = {
  args: {
    //value: 'Value!fs12fcqw12',
  },
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <>
      <Checkbox/>
    </>
  ),
}