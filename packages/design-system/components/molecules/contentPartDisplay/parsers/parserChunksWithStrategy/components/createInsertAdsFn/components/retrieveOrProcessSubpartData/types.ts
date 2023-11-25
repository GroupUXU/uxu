import { Chunk } from "../../../../../../types";
import { ProcessedSubpartInfoCache } from "../../types";

export type RetrieveOrProcessSubpartDataProps = {
  chunk: Chunk;
  processedSubpartInfoCache: ProcessedSubpartInfoCache;
};