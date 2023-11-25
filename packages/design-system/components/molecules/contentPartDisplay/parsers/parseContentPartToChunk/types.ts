import type { ReactElement } from "react";
import type { Chunks, ChunkProps} from "../../types";

export type ParseContentPartToChunkProps = {
  contentParts: Array<ChunkProps<Record<string, unknown>>>;
  children: ({ chunkComponents }: { chunkComponents: Chunks }) => ReactElement;
};
