import classnames from "classnames";
import { forwardRef } from 'react';
import type { InputSwitchProps } from './types';
import styles from './switch.module.scss';

export const InputSwitch = forwardRef<HTMLInputElement, InputSwitchProps>(({ children, className, style, ...args }, ref) => {

  return (
    <label className={classnames(styles.label, className)} style={style}>
      <input {...args} className={styles.input} ref={ref} type='checkbox' />
      <div className={classnames(styles.slider, 'slider')} />
      {children}
    </label>
  );
});

InputSwitch.displayName = 'InputSwitch';
