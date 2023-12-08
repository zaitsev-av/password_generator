import type { Meta } from '@storybook/react'

import { JSX } from 'react'

import { Card } from '@/components/card/card'

const meta = {
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta

export const Default: () => JSX.Element = () => {
  return (
    <Card>
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto dolorem explicabo
      illum nam nisi non provident quia, repellendus. Alias ea impedit nemo obcaecati omnis, sint
      suscipit totam velit veritatis!',
    </Card>
  )
}
