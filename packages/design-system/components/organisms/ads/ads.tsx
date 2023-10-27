import type { CSSProperties, ReactElement } from 'react';
import { adsSlots } from 'assets';
import type { AdsProps } from './types';
import styles from './ads.module.scss';

export function Ads({ slot, stickyOffset }: AdsProps): ReactElement {
  const { width, height } = adsSlots[slot];

  const style: CSSProperties = stickyOffset ? { position: 'sticky', top: stickyOffset } : {};

  return (
    <div style={style}>
      <div className={styles.wrapper} style={{ width, height }} />
    </div>
  );
}
