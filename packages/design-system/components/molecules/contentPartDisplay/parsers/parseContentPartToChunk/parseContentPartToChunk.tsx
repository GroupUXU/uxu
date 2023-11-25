import type { ReactElement } from 'react';
import { compose, map } from 'ramda';
import { chunksMap } from '../../maps';
import { EmptyChunk } from '../../chunks';
import type { Chunk, Chunks, ChunkProps } from '../../types';
import type { ParseContentPartToChunkProps } from './types';

export function ParseContentPartToChunk({ children, contentParts }: ParseContentPartToChunkProps): ReactElement<{ chunkComponents: Chunks }> {
  const getChunkComponent = (contentPart: ChunkProps<Record<string, unknown>>): Chunk => {
    return {
      props: contentPart,
      ChunkComponent: chunksMap.get(contentPart.type) || EmptyChunk,
    };
  };

  const transformContentPartToChunkComponent = compose(getChunkComponent);

  const parseAndFilterContentParts = (content: Array<ChunkProps<Record<string, unknown>>>): Chunks => map(transformContentPartToChunkComponent, content);

  const chunkComponents: Chunks = parseAndFilterContentParts(contentParts);

  return (<>{children({ chunkComponents })}</>);
};
