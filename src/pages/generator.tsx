import { FC, useState } from 'react'

import { RadioButton, RadioGroupItemType } from '@/components/radio-button/radio-button'

interface Props {}
export const Generator: FC<Props> = props => {
  const {} = props
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

  const [value, setValue] = useState('one')

  return (
    <div style={{ left: '50%', position: 'absolute', top: '40%' }}>
      <RadioButton items={items} onChange={setValue} value={value} />
    </div>
  )
}
