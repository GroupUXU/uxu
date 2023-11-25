import type { StrategyProps, StrategyResult } from '../../../types';

const shouldExecuteStrategy = (
  numChunk: number,
  numChunksSinceLastAd: number
): boolean =>
  numChunk === 1 ||
  numChunksSinceLastAd === 3

export function chunksStrategyForPostMobile(
  props: StrategyProps,
): StrategyResult {

  const {
    numChunk,
    numChunksSinceLastAd,
  } = props;

  const executeStrategyNow = shouldExecuteStrategy(
    numChunk,
    numChunksSinceLastAd
  );

  return {
    executeStrategyNow
  };
}
