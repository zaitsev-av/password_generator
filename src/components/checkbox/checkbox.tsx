// import React from 'react';
import * as CheckboxRDX from '@radix-ui/react-checkbox';
import {CheckIcon} from "@/assets/icons";
import s from './checkbox.module.scss'
import {Label} from "@/components";
// import { CheckIcon } from '@radix-ui/react-icons';
// import './styles.css';

const CheckboxDemo = () => (
  <form>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <CheckboxRDX.Root className={s.root} defaultChecked id="c1">
        <CheckboxRDX.Indicator className={s.indicator}>
          <CheckIcon />
        </CheckboxRDX.Indicator>
      </CheckboxRDX.Root>
      <Label label={'With label'}/>
    </div>
  </form>
);

export default CheckboxDemo;