import { ReactNode } from "react";
import type { Chunks, AdComponent, AdSlots, Strategy } from '../../types';



export type ChunksWithStrategyAdsProps = {
  children: (args: { chunksWithAds: Chunks }) => ReactNode;
  AdComponent?: AdComponent;
  adSlots: AdSlots;
  chunks: Chunks;
  strategy: Strategy;
};