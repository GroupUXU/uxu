import { Chunk } from '../../../../../../../../types';
import { ContentPartEnum } from "../../../../../../../../enums";
import { GetAdChunkProps } from './types';

export function getAdChunk({ adSlot, AdComponent }: GetAdChunkProps ): Chunk {
  return {
    ChunkComponent: AdComponent,
    props: { adSlot, id: adSlot, type: ContentPartEnum.AD }
  };
}
