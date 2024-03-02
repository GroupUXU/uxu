import type { ReactElement } from 'react';
import { AlertTriangle, CheckCircle, AlertOctagon, HelpCircle } from 'react-feather';
import classNames from 'classnames';
import styles from './note.module.scss';
import {NoteProps} from './types';
import {Status} from 'utils';

type IconComponentsType = {
  [key in Status]: ReactElement;
};

const iconComponents: IconComponentsType = {
  success: <CheckCircle />,
  default: <HelpCircle />,
  warning: <AlertTriangle />,
  danger: <AlertOctagon />,
  error: <AlertOctagon />,
};

export function Note({ children, className, typ = 'default', fill, action, style, disabled }: NoteProps): ReactElement {
  const IconComponent: ReactElement = iconComponents[typ];
  const wrapperClasses = classNames(styles.note, className, {
    [styles[typ]]: !fill,
    [styles[`${typ}Fill`]]: fill,
    [styles.action]: Boolean(action),
    [styles.disabled]: disabled,
  });

  return (
    <div className={wrapperClasses} style={style}>
      {IconComponent}
      {children}
      {action ? action : null}
    </div>
  );
}
