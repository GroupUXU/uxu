/* eslint-disable react/no-array-index-key -- Temporarily disabling the react/no-array-index-key rule because there are no other unique keys available in LoadingWheel. */
import type { ReactElement } from 'react';
import type { LoadingWheelProps } from './types';
import styles from './loadingWheel.module.scss';

export function LoadingWheel({ size = 1 }: LoadingWheelProps): ReactElement {
  const wheelSize = { height: `${size}rem`, width: `${size}rem` };

  return (
    <div className={styles.wrapper} style={wheelSize}>
      <div className={styles.wheel} style={wheelSize}>

        {new Array(12).fill(null).map((_, i) => (
          <span
            className={styles.item}
            key={i}
            style={{
              animationDelay: `${0 - (i / 10)}s`,
              transform: `rotate(${360 / 12 * i}deg) translate(146%)`
            }}
          />
        ))}
      </div>
    </div>
  );
}
