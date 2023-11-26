import type { ReactElement } from "react";
import { AdsSlot } from "../../../../atoms/adsSlot";
import type { AdChunkProps } from "./types";
import styles from './adChunk.module.scss';

export function AdChunk({ adSlot }: AdChunkProps): ReactElement {
  return <AdsSlot className={styles.ad} slot={adSlot} />;
}
