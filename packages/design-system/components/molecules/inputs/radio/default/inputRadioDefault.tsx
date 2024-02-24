import {forwardRef} from 'react';
import type {ReactElement, ChangeEvent, KeyboardEvent} from 'react';
import classNames from 'classnames';
import styles from './inputRadioDefault.module.scss';
import type {InputRadioDefautProps} from './types';

export const InputRadioDefault = forwardRef<HTMLInputElement, InputRadioDefautProps>(
    ({className, style, errorMessage, children, value, onChange, checked, fill, typ}, ref): ReactElement => {
        const handleClick = (): void => {
            onChange && onChange({target: {value}} as ChangeEvent<HTMLInputElement>);
        };

        const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
            if (event.key === 'Enter' || event.key === ' ') {
                handleClick();
            }
        };

        return (
            <label className={classNames(styles.label, className, {
                [styles.fill]: fill,
                [styles.success]: typ === 'success',
                [styles.warning]: typ === 'warning',
                [styles.danger]: typ === 'danger',
                [styles.error]: typ === 'error'
            })} style={style}>
                <div
                    className={classNames(styles.wrapperCheck, {[styles.check]: checked})}
                    onClick={handleClick}
                    onKeyDown={handleKeyDown}
                    role="button"
                    tabIndex={0}
                >
                    {children}
                    <div className={styles.circle}/>
                </div>
                <input
                    checked={checked}
                    className={classNames(styles.input, {[styles.error]: errorMessage})}
                    onChange={onChange}
                    ref={ref}
                    type="radio"
                    value={value}
                />
            </label>
        );
    }
);

InputRadioDefault.displayName = 'InputRadioIcon';
