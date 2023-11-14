import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import ComponentConfetti from 'react-confetti';
import classnames from 'classnames';
import { checkIsDOM } from 'utils';
import type { ConfettiProps } from './types';
import styles from './confetti.module.scss';


export function Confetti({ title, className }: ConfettiProps): ReactElement {
  const [windowSize, setWindowSize] = useState({ height: 1000, width: 1000 });

  useEffect(() => {
    checkIsDOM(() => {
      const { innerHeight: height, innerWidth: width } = window;
      setWindowSize({ height, width });
    });
  }, []);

  const { height, width } = windowSize;

  return (
    <div className={classnames(styles.wrapper, className)}>
      {title ? <span>{title}</span> : null}
      <ComponentConfetti className={styles.confetti} height={height} width={width} />
    </div>
  );
}
