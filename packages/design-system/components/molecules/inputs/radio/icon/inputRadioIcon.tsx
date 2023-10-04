import { forwardRef } from 'react';
import type { ReactElement, ChangeEvent, KeyboardEvent } from 'react';
import classNames from 'classnames';
import styles from './inputRadioIcon.module.scss';
import type { InputRadioIconProps } from './types';

export const InputRadioIcon = forwardRef<HTMLInputElement, InputRadioIconProps> (
  ( {className, style, errorMessage, icon, value, onChange, checked}, ref ): ReactElement => {
    const handleClick = (): void => {
      onChange && onChange ( {target: {value}} as ChangeEvent<HTMLInputElement> );
    };

    const handleKeyDown = ( event: KeyboardEvent<HTMLDivElement> ): void => {
      if ( event.key === 'Enter' || event.key === ' ' ) {
        handleClick ();
      }
    };

    return (
      <label className={classNames ( styles.label, className )} style={style}>
        <div
          className={classNames ( styles.wrapperIcon, {[ styles.wrapperIconCheck ]: checked} )}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          {icon}
        </div>
        <input
          checked={checked}
          className={classNames ( styles.input, {[ styles.error ]: errorMessage} )}
          onChange={onChange}
          ref={ref}
          type="radio"
          value={value}
        />
      </label>
    );
  }
);

InputRadioIcon.displayName = 'InputRadioIcon';
