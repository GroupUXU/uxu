import type { ReactNode } from "react";
import type { Chunks, AdComponent, AdSlots, Strategy } from '../../types';



export type ChunksWithStrategyAdsProps = {
  children: (args: { chunksWithStrategy: Chunks }) => ReactNode;
  AdComponent?: AdComponent;
  adSlots: AdSlots;
  chunks: Chunks;
  strategy: Strategy;
};