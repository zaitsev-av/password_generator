import { FC, useState } from 'react'

import { Select } from '@/components'
import { Button } from '@/components/button/button'
import { Card } from '@/components/card'
import { Checkbox } from '@/components/checkbox'
import PasswordInputGroup from '@/components/password-input-group/password-input-group'
import { Slider } from '@/components/slider/slider'
import { passwordLength } from '@/utils/settingsData'

interface Props {}
export const Generator: FC<Props> = props => {
  const {} = props

  const [digitCountValue, setDigitCountValue] = useState<boolean>(false)
  const [passwordLengthValue, setPasswordLengthValue] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
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
        <Slider
          label={'Количество символов в пароле:'}
          onChange={changeSliderValues}
          value={values}
        />

        <Checkbox
          checked={digitCountValue}
          id={'symbols'}
          label={'Специальные символы:'}
          onChange={setDigitCountValue}
        />
        <Checkbox
          checked={passwordLengthValue}
          id={'UpperCase'}
          label={'Большие буквы:'}
          onChange={setPasswordLengthValue}
        />
        <Select
          items={passwordLength}
          label={'Длина пароля'}
          onChange={onChangeHandler}
          value={valueSelect}
        />

        <PasswordInputGroup
          onChange={() => {}}
          placeholder={'Здесь будет ваш пароль'}
          value={password}
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
