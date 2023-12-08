import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components'
import { EFontSize, EFontWeight } from '@/utils/enums'

const meta = {
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Smal: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto dolorem explicabo illum nam nisi non provident quia, repellendus. Alias ea impedit nemo obcaecati omnis, sint suscipit totam velit veritatis!',
    fontSize: EFontSize['8px'],
    fontWeight: EFontWeight.Regular,
  },
}

export const Big: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto dolorem explicabo illum nam nisi non provident quia, repellendus. Alias ea impedit nemo obcaecati omnis, sint suscipit totam velit veritatis!',
    fontSize: EFontSize['20px'],
    fontWeight: EFontWeight.Regular,
  },
}

export const VeryBig: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto dolorem explicabo illum nam nisi non provident quia, repellendus. Alias ea impedit nemo obcaecati omnis, sint suscipit totam velit veritatis!',
    fontSize: EFontSize['32px'],
    fontWeight: EFontWeight.Bold,
  },
}
