import type { AdSlotInfo, ChunkDataForCurrentAndNextSinceLastAd, Chunk, Chunks, StrategyResult } from '../../../../types';
import type { InsertAdsFnProps , CreateInsertAdsFnProps, ProcessedSubpartInfoCache, SubPartInfo } from './types';
import { chunkOrderManager } from './components/chunkOrderManager/chunkOrderManager';
import { retrieveOrProcessSubpartData } from './components/retrieveOrProcessSubpartData/retrieveOrProcessSubpartData';

const processedSubpartInfoCache: ProcessedSubpartInfoCache = new Map();

export function createInsertAdsFn({ AdComponent }: CreateInsertAdsFnProps): (props: InsertAdsFnProps) => Chunks {
  return ({ chunks, adSlots, strategy }: InsertAdsFnProps): Chunks => {
    let numChunksSinceLastAd = 1;
    const countChunks: number = chunks.length;
    const adsSlotsIterator: IterableIterator<string> = adSlots[Symbol.iterator]();
    const adsSlotIterator = adsSlotsIterator.next();
    let adSlotInfo: AdSlotInfo = {
      adSlot: String(adsSlotIterator.value),
      noMoreAdSlots: Boolean(adsSlotIterator.done),
    };
    const chunkDataForCurrentAndNextSinceLastAd: ChunkDataForCurrentAndNextSinceLastAd =
      {
        current: {
          totalCharactersSinceLastAd: 0,
          typesInSubPartsSinceLastAd: [],
        },
        next: {
          totalCharactersSinceLastAd: 0,
          typesInSubPartsSinceLastAd: [],
        },
      };

    return chunks.flatMap((chunk, index): Chunks => {
      let result: SubPartInfo = retrieveOrProcessSubpartData({
        chunk,
        processedSubpartInfoCache,
      });

      chunkDataForCurrentAndNextSinceLastAd.current.totalCharactersSinceLastAd += result.charactersInSubPart;
      chunkDataForCurrentAndNextSinceLastAd.current.typesInSubPartsSinceLastAd.push(result.typeNameSubPart);

      if (index < countChunks - 1) {
        const nextChunk: Chunk = chunks[index + 1];
        result = retrieveOrProcessSubpartData({
          chunk: nextChunk,
          processedSubpartInfoCache,
        });

        chunkDataForCurrentAndNextSinceLastAd.next.totalCharactersSinceLastAd += result.charactersInSubPart;
        chunkDataForCurrentAndNextSinceLastAd.next.typesInSubPartsSinceLastAd.push(result.typeNameSubPart);
      }

      const strategyResult: StrategyResult = strategy({
        adSlotInfo,
        numChunk: Number(index),
        chunkDataForCurrentAndNextSinceLastAd,
        numChunksSinceLastAd,
      });

      const chunkOrder: Chunks = chunkOrderManager({
        adSlotInfo,
        AdComponent,
        ...strategyResult,
      })(chunk);

      if (strategyResult.executeStrategyNow) {
        numChunksSinceLastAd = 1;
        const adsSlotIteratorNext = adsSlotsIterator.next();
        adSlotInfo = { adSlot: String(adsSlotIteratorNext.value), noMoreAdSlots: Boolean(adsSlotIteratorNext.done) };
      } else {
        numChunksSinceLastAd = Number(numChunksSinceLastAd);
      }

      return chunkOrder;
    });
  };
}
