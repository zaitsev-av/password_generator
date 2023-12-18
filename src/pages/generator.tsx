import { FC, useState } from 'react'

import { Select } from '@/components'
import { Button } from '@/components/button/button'
import { Card } from '@/components/card'
import { RadioButton } from '@/components/radio-button/radio-button'
import { Slider } from '@/components/slider/slider'
import { digitCount, passwordLength, specialCharacters } from '@/utils/settingsData'

interface Props {}
export const Generator: FC<Props> = props => {
  const {} = props

  const [digitCountValue, setDigitCountValue] = useState('1')
  const [passwordLengthValue, setPasswordLengthValue] = useState('1')
  const [valueSelect, setValueSelect] = useState(passwordLength[0].name)
  const [values, setValues] = useState<[number]>([12])

  const onChangeHandler = (value: string) => {
    setValueSelect(value)
    console.log(value)
  }

  const changeSliderValues = (values: [number]) => {
    setValues(values)
    console.log(values)
  }

  return (
    <div
      style={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        left: '50%',
        marginTop: '200px',
        position: 'relative',
        top: '40%',
      }}
    >
      <Card
        style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <Slider label={'Количество цифр в пароле:'} onChange={changeSliderValues} value={values} />

        <RadioButton
          items={digitCount}
          label={'Специальные символы:'}
          onChange={setDigitCountValue}
          value={digitCountValue}
        />
        <RadioButton
          items={specialCharacters}
          label={'Большие буквы:'}
          onChange={setPasswordLengthValue}
          value={passwordLengthValue}
        />
        <Select
          items={passwordLength}
          label={'Длинна пароля'}
          onChange={onChangeHandler}
          value={valueSelect}
        />
        <div
          style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Button.Root style={{ margin: '15px' }}>
            <Button.Text>Сгенерировать пароль</Button.Text>
          </Button.Root>
        </div>
      </Card>
    </div>
  )
}
