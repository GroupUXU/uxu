import type { ReactElement } from 'react';
import { AlertTriangle, CheckCircle, AlertOctagon, HelpCircle } from 'react-feather';
import classNames from 'classnames';
import styles from './note.module.scss';
import {NoteProps} from './types';
import {InfoTyp} from 'utils';

type IconComponentsType = {
  [key in InfoTyp]: ReactElement;
};

const iconComponents: IconComponentsType = {
  success: <CheckCircle />,
  warning: <AlertTriangle />,
  error: <AlertOctagon />,
  default: <HelpCircle />,
  danger: <HelpCircle />,
};

export function Note({ children, className, typ = 'default', fill, action, disabled }: NoteProps): ReactElement {
  const IconComponent: ReactElement = iconComponents[typ];
  const wrapperClasses = classNames(styles.note, className, {
    [styles[typ]]: !fill,
    [styles[`${typ}Fill`]]: fill,
    [styles.action]: Boolean(action),
    [styles.disabled]: disabled,
  });

  return (
    <div className={wrapperClasses}>
      {IconComponent}
      {children}
      {action ? action : null}
    </div>
  );
}
