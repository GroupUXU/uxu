import { Chunks, AdSlots, Strategy, AdComponent, Chunk } from "../../../../types";

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
  typeNameSubPart: string;
};

export type ProcessedSubpartInfoCache = Map<Chunk, SubPartInfo>;