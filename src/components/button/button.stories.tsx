import {JSX} from 'react'
import {Button} from "@/components/button/button";
import {HomeIcon} from "@/assets/icons";

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Button',
}

export default meta

export const Default: () => JSX.Element = () => {

  return (
    <Button.Root>
      <Button.Text>{'some text'}</Button.Text>
    </Button.Root>
  )
}

export const WithIcon: () => JSX.Element = () => {

  return (
    <Button.Root>
     <HomeIcon/>
      <Button.Text>{'some text'}</Button.Text>
    </Button.Root>
  )
}
