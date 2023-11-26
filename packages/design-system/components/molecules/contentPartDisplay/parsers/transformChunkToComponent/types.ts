import type { FC } from 'react';
import type { ChunkProps } from "../../types";

export type TransformChunkToComponentProps = {
  ChunkComponent: FC<ChunkProps<Record<string, unknown>>>;
  props: ChunkProps<Record<string, unknown>>;
};
