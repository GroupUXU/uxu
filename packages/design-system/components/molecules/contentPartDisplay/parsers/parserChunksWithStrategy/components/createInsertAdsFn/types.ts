import type { Chunks, AdSlots, Strategy, AdComponent, Chunk } from "../../../../types";
import type { ContentPartEnum } from "../../../../enums";

export type CreateInsertAdsFnProps = {
  AdComponent: AdComponent
}

export type InsertAdsFnProps = {
  chunks: Chunks;
  adSlots: AdSlots;
  strategy: Strategy;
};

export type SubPartInfo = {
  charactersInSubPart: number;
  typeNameSubPart: ContentPartEnum;
};

export type ProcessedSubpartInfoCache = Map<Chunk, SubPartInfo>;