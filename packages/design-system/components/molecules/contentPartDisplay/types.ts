import type { FC } from 'react';
import type { AdChunk } from './chunks';
import type { ContentPartEnum } from './enums';

export type ChunkProps<T> = {
  id: string;
  type: ContentPartEnum;
} & T;

export type Chunk<T = Record<string, unknown>> = {
  props: ChunkProps<T>;
  ChunkComponent: FC<T>;
};

export type Chunks = Array<Chunk>;

export type AdSlot = string;

export type AdSlots = Array<AdSlot>;

export type AdComponent = typeof AdChunk;

export type AdSlotInfo = {
  adSlot: string;
  noMoreAdSlots: boolean;
};

export type ChunkDataAfterLastAd = {
  totalCharactersSinceLastAd: number;
  typesInSubPartsSinceLastAd: Array<string>;
};

export type ChunkDataForCurrentAndNextSinceLastAd = {
  current: ChunkDataAfterLastAd;
  next: ChunkDataAfterLastAd;
};

export type StrategyProps = {
  numChunk: number;
  adSlotInfo: AdSlotInfo;
  numChunksSinceLastAd: number;
  chunkDataForCurrentAndNextSinceLastAd: ChunkDataForCurrentAndNextSinceLastAd;
};

export type BonusChunkPlacement = {
  bonusChunk: Chunk;
  isBonusChunkAfterAd: boolean;
};

export type StrategyResult = {
  executeStrategyNow: boolean;
  bonusChunkPlacement?: BonusChunkPlacement;
};

export type Strategy = (props: StrategyProps) => StrategyResult;
