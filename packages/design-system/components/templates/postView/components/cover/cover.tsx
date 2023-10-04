/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */

import type { ReactElement } from "react";
import Image from "next/legacy/image";
import { DummyImg } from "../../../../atoms";
import styles from "./cover.module.scss";
import type { CoverProps } from './types';

export function Cover({ cover, title }: CoverProps ): ReactElement {
  const { src, alt = title, caption } = cover || {};

  return (
    <div className={styles.wrapperCoverWithMeta}>
      <div className={styles.wrapperImg}>
        {src ? (
          <Image alt={alt} layout="fill" objectFit="cover" src={src} />
        ) : (
          <DummyImg height="30rem" width="100%" />
        )}
      </div>
      {caption && <span>Źródło: {caption}</span>}
    </div>
  );
}
