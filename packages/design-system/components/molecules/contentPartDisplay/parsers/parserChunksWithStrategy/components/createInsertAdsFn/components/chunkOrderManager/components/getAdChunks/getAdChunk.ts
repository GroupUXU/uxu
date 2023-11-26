import type { Chunk } from '../../../../../../../../types';
import { ContentPartEnum } from "../../../../../../../../enums";
import type { GetAdChunkProps } from './types';

export function getAdChunk({ adSlot, AdComponent }: GetAdChunkProps ): Chunk {
  return {
    ChunkComponent: AdComponent,
    props: { adSlot, id: adSlot, type: ContentPartEnum.AD }
  };
}
