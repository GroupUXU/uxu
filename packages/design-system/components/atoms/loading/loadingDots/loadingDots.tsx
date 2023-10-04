import type { ReactElement } from 'react';
import type { LoadingDotsProps } from './types';
import styles from './loadingDots.module.scss';

export function LoadingDots({ size }: LoadingDotsProps): ReactElement {
  return (
    <div className={styles.wrapper}>
      <span style={{ width: `${size}rem`, height: `${size}rem` }} />
      <span style={{ width: `${size}rem`, height: `${size}rem` }} />
      <span style={{ width: `${size}rem`, height: `${size}rem` }} />
    </div>
  );
}
