import classnames from 'classnames';
import type { ReactElement } from 'react';
import type { ContainerProps } from "./type";
import styles from './container.module.scss';

export function Container({ children, className, full = false }: ContainerProps): ReactElement {
  const containerClass = classnames(
    styles.wrapper,
    className, {
      [styles.full]: full,
    });

  return <div className={containerClass}>{children}</div>;
}
