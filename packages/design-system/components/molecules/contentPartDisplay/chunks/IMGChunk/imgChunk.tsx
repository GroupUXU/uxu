import type { ReactElement } from 'react';
import Image from 'next/image';
import type { ChunkProps } from '../../types';
import styles from './imgChunk.module.scss';

export function IMGChunk({ alternativeText, src, caption }: ChunkProps<{ alternativeText?: string, src: string | null, caption?: string }>): ReactElement {
  const alt = String(alternativeText) || ""
  return (
    <div className={styles.wrapper}>
      {/* eslint-disable-next-line react/jsx-no-leaked-render -- this information is false */}
      {src && <Image alt={alt} height={400} layout="intrinsic" src={src} width={1200} />}
      {/* eslint-disable-next-line react/jsx-no-leaked-render -- this information is false */}
      {caption && <span>Źródło: {caption}</span>}
    </div>
  );
}
