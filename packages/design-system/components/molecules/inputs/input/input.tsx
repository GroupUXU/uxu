/* eslint-disable react/jsx-no-leaked-render, react/jsx-sort-props -- I don't hafe time to fix */
import { forwardRef } from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames';
import { Note } from '../../../atoms';
import type { InputProps } from './types';
import styles from './input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, errorMessage, style, ...props }, ref): ReactElement => (
    <label className={classNames(styles.label, className)} style={style}>
      <input
        {...props}
        className={classNames(styles.input, { [styles.error]: errorMessage })}
        ref={ref}
      />
      {errorMessage && (
        <Note type='warning' fill>
          <p className={classNames(styles.message, { [styles.error]: errorMessage })}>
            {errorMessage}
          </p>
        </Note>
      )}
      {children}
    </label>
  )
);

Input.displayName = 'Input';
