import type { ReactElement } from 'react';
import { AlertTriangle, CheckCircle, AlertOctagon, HelpCircle } from 'react-feather';
import classNames from 'classnames';
import styles from './note.module.scss';
import type { PropsNote } from './types';

const iconComponents = {
  success: <CheckCircle />,
  warning: <AlertTriangle />,
  error: <AlertOctagon />,
  default: <HelpCircle />,
};

export function Note({ children, className, type = 'default', fill, action, disabled }: PropsNote): ReactElement {
  const IconComponent = iconComponents[type];
  const wrapperClasses = classNames(styles.note, className, {
    [styles[type]]: !fill,
    [styles[`${type}Fill`]]: fill,
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
