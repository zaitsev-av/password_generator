import type { Meta, StoryObj } from '@storybook/react'

import { PasswordInputGroup } from '@/components/password-input-group/password-input-group'

const meta = {
  args: {
    value: 'Value!fs12fcqw12',
  },
  component: PasswordInputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/PasswordInputGroup',
} satisfies Meta<typeof PasswordInputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <>
      <PasswordInputGroup value={args.value} />
    </>
  ),
}
