import type { Chunk } from "../../../../../../../../types";

export type SubChunkHasType = {
  props: {
    value?: string;
    type?: string;
  }
} & Chunk;