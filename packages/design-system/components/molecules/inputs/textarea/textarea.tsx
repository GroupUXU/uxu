/* eslint-disable react/jsx-no-leaked-render, react/jsx-sort-props  -- I don't have time for this fix */
import type { ReactElement } from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames';
import { Note } from '../../../atoms/note';
import type { TextAreaProps } from './types';
import styles from './textarea.module.scss';

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ children, className, errorMessage, style, ...props}, ref): ReactElement => (
  <label className={classNames(styles.label, className)} style={style}>
        <textarea
          {...props}
          className={classNames(styles.textarea, { [styles.error]: errorMessage })}
          ref={ref}
        />
    {errorMessage && <Note typ='warning' fill><p className={classNames(styles.message, { [styles.error]: errorMessage })}>{errorMessage}</p></Note>}
    {children}
  </label>
));

Textarea.displayName = 'Textarea';
