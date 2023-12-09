import type { Meta } from '@storybook/react'

import { JSX } from 'react'

import { Card } from '@/components/card/card'

const meta = {
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta

export const Default: () => JSX.Element = () => {
  return (
    <Card style={{display: "flex",flexDirection: "column", gap: '15px'}}>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
       <div>Animi architecto dolorem explicabo</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
      <div>illum nam nisi non provident quia, repellendus.</div>
       <div>Alias ea impedit nemo obcaecati omnis, sint
      suscipit totam velit veritatis!</div>
    </Card>
  )
}
