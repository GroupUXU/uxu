import type { StrategyProps, StrategyResult } from '../../../types';

const EARLY_AD_TRIGGER_TYPES: Set<string> = new Set<string>([
  'ContentPartSocial',
  'ContentPartPhoto',
]);

const shouldExecuteStrategy = (
  numChunk: number,
  numChunksSinceLastAd: number,
  totalCharactersSinceLastAd: number,
  typesInSubPartsSinceLastAd: string[],
): boolean =>
  numChunk === 1 ||
  numChunksSinceLastAd === 4 ||
  (numChunksSinceLastAd === 3 &&
    (totalCharactersSinceLastAd >= 700 ||
      typesInSubPartsSinceLastAd.some(
        EARLY_AD_TRIGGER_TYPES.has,
        EARLY_AD_TRIGGER_TYPES,
      )));

export function chunksStrategyForPost(
  props: StrategyProps,
): StrategyResult {
  const {
    numChunk,
    numChunksSinceLastAd,
    chunkDataForCurrentAndNextSinceLastAd,
  } = props;
  const { next, current } = chunkDataForCurrentAndNextSinceLastAd;

  const executeStrategyNow = shouldExecuteStrategy(
    numChunk,
    numChunksSinceLastAd,
    current.totalCharactersSinceLastAd,
    next.typesInSubPartsSinceLastAd,
  );

  return {
    executeStrategyNow
  };
}
