import type { Chunk } from "../../../../../../types";
import type { ProcessedSubpartInfoCache } from "../../types";

export type RetrieveOrProcessSubpartDataProps = {
  chunk: Chunk;
  processedSubpartInfoCache: ProcessedSubpartInfoCache;
};