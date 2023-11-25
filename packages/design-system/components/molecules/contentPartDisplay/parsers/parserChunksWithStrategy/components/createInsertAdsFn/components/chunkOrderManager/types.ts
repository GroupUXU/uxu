import { AdSlotInfo, AdComponent, BonusChunkPlacement } from "../../../../../../types";

export type ChunkOrderManagerProps = {
  adSlotInfo: AdSlotInfo;
  AdComponent: AdComponent;
  executeStrategyNow: boolean;
  bonusChunkPlacement?: BonusChunkPlacement;
};