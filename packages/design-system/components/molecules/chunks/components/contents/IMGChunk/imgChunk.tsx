import type { ReactElement } from 'react';
import Image from 'next/image';
import type { ContentPartProps } from '../../../types';
import styles from './imgChunk.module.scss';

export function IMGChunk( {alternativeText, src, caption}: ContentPartProps): ReactElement {
  return (
    <div className={styles.wrapper}>
      {/* eslint-disable-next-line react/jsx-no-leaked-render -- this information is false */}
      {src && <Image alt={alternativeText || ''} height={400} layout="intrinsic" src={src} width={1200} />}
      {/* eslint-disable-next-line react/jsx-no-leaked-render -- this information is false */}
      {caption && <span>Źródło: {caption}</span>}
    </div>
  );
}
