import { useMemo } from 'react';
import type { ReactElement } from 'react';
import { AdChunk } from '../../chunks';
import type { Chunks } from '../../types';
import type { ChunksWithStrategyAdsProps } from './types';
import { createInsertAdsFn } from './components';



export function ParserChunksWithStrategy( { children, AdComponent = AdChunk, chunks, adSlots, strategy }: ChunksWithStrategyAdsProps): ReactElement<{ children: { chunksWithStrategy: Chunks }}> {
  const insertAds = useMemo(
    () =>
      createInsertAdsFn({
        AdComponent,
      }),
    [AdComponent],
  );

  const chunksWithStrategy: Chunks  = useMemo(
    () => insertAds({ chunks, adSlots, strategy }),
    [chunks, adSlots, strategy],
  );

  return <>{children({ chunksWithStrategy })}</>;
}
