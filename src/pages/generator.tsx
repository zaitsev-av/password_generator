import {FC, useState} from 'react'

import {Select} from '@/components'
import {Card} from '@/components/card'
import {RadioButton} from '@/components/radio-button/radio-button'
import {digitCount, passwordLength, specialCharacters} from "@/utils/settingsData";

interface Props {}
export const Generator: FC<Props> = props => {
  const {} = props

  const [digitCountValue, setDigitCountValue] = useState('1')
  const [passwordLengthValue, setPasswordLengthValue] = useState('1')
  const [valueSelect, setValueSelect] = useState(passwordLength[0].name)

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
        position: 'relative',
        top: '40%',
        marginTop: '200px'
      }}
    >
      <Card>
        <RadioButton
          items={digitCount}
          label={'Количество цифр в пароле:'}
          onChange={setDigitCountValue}
          value={digitCountValue}
        />
        <Select
          items={passwordLength}
          label={'Длинна пароля'}
          onChange={onChangeHandler}
          value={valueSelect}
        />
        <RadioButton
          items={specialCharacters}
          label={'Количество специальных символов в пароле:'}
          onChange={setPasswordLengthValue}
          value={passwordLengthValue}
        />
        {/*<RadioButton*/}
        {/*  items={digitCount}*/}
        {/*  label={'Количество цифр в пароле:'}*/}
        {/*  onChange={setValue}*/}
        {/*  value={value}*/}
        {/*/>*/}
        {/*<RadioButton*/}
        {/*  items={digitCount}*/}
        {/*  label={'Количество цифр в пароле:'}*/}
        {/*  onChange={setValue}*/}
        {/*  value={value}*/}
        {/*/>*/}
      </Card>
    </div>
  )
}
