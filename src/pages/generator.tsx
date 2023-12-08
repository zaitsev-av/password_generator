import { FC, useState } from 'react'

import { Select } from '@/components'
import { Card } from '@/components/card'
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

  const itemsSelect = [
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

  const [value, setValue] = useState('one')
  const [valueSelect, setValueSelect] = useState(itemsSelect[0].name)

  const onChangeHandler = (value: string) => {
    setValueSelect(value)
    console.log(value)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        left: '50%',
        position: 'absolute',
        top: '40%',
      }}
    >
      <Card>
        <RadioButton
          items={items}
          label={'Количество цифр в пароле:'}
          onChange={setValue}
          value={value}
        />
        <Select
          items={itemsSelect}
          label={'Длинна пароля'}
          onChange={onChangeHandler}
          value={valueSelect}
        />
      </Card>
    </div>
  )
}
