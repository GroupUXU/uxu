import type { StrategyProps, StrategyResult } from '../../../types';
import { ContentPartEnum } from '../../../enums';

const EARLY_AD_TRIGGER_TYPES: Set<ContentPartEnum> = new Set<ContentPartEnum>([
  ContentPartEnum.IMG,
]);

const shouldExecuteStrategy = (
  numChunk: number,
  numChunksSinceLastAd: number,
  totalCharactersSinceLastAd: number,
  typesInSubPartsSinceLastAd: Array<ContentPartEnum>,
): boolean =>
  numChunk === 1 ||
  numChunksSinceLastAd === 4 ||
  (numChunksSinceLastAd === 3 && (totalCharactersSinceLastAd >= 700 || typesInSubPartsSinceLastAd.some(type => EARLY_AD_TRIGGER_TYPES.has(type))));

export function strategyForContentPartInPostDesktop(props: StrategyProps): StrategyResult {
  const { numChunk, numChunksSinceLastAd, chunkDataForCurrentAndNextSinceLastAd} = props;
  const { next, current } = chunkDataForCurrentAndNextSinceLastAd;

  const executeStrategyNow: boolean = shouldExecuteStrategy(
    numChunk,
    numChunksSinceLastAd,
    current.totalCharactersSinceLastAd,
    next.typesInSubPartsSinceLastAd,
  );

  return {
    executeStrategyNow,
    bonusChunkPlacement: undefined
  };
}
