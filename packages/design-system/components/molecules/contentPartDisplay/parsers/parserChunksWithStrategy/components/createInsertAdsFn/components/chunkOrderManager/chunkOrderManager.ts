import type { Chunk, Chunks } from "../../../../../../types";
import type { ChunkOrderManagerProps } from './types';
import { getAdChunk } from './components';

export function chunkOrderManager({ adSlotInfo, AdComponent, executeStrategyNow, bonusChunkPlacement }: ChunkOrderManagerProps): (chunk: Chunk) => Chunks  {
  const { bonusChunk, isBonusChunkAfterAd } = bonusChunkPlacement || {};
  const { adSlot, noMoreAdSlots } = adSlotInfo;

  if (!executeStrategyNow || noMoreAdSlots) {
    return (chunk: Chunk): Chunks => [chunk];
  }

  function chunks(chunk: Chunk): Chunks {
    const adChunk: Chunk = getAdChunk({ adSlot, AdComponent });
    if (bonusChunk) {
      return isBonusChunkAfterAd
        ? [chunk, adChunk, bonusChunk]
        : [chunk, bonusChunk, adChunk];
    }
    return [chunk, adChunk];
  };

  return chunks;
}
