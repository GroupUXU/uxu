import {forwardRef} from 'react';
import type {ReactElement} from 'react';
import classNames from 'classnames';
import styles from './inputRadioDefault.module.scss';
import type {InputRadioDefautProps} from './types';

export const InputRadioDefault = forwardRef<HTMLInputElement, InputRadioDefautProps>(
			({className, style, value, name, ...props}, ref): ReactElement => {
					
					return (
								<label className={classNames(styles.label, className)} style={style} htmlFor={value}>
										{value}
										<input
													className={styles.input}
													id={value}
													name={name}
													ref={ref}
													type="radio"
													value={value}
													{...props}
										/>
								</label>
					);
			}
);

InputRadioDefault.displayName = 'InputRadioIcon';
