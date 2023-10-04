import type { ReactElement } from 'react';
import { Image } from 'react-feather';
import styles from './dummyImg.module.scss';
import type { DummyIMGProps } from './types';

export function DummyImg( {iconSize, ...args }: DummyIMGProps): ReactElement {
  return <div className={styles.wrapper} style={{...args}}><Image size={iconSize || "4rem"} /></div>;
}
