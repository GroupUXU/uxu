import type { ReactElement } from 'react';
import { compose, map } from 'ramda';
import { chunksMap } from '../../maps';
import { EmptyChunk } from '../../contents';
import type { ChunkComponentWithPropsInObject, ContentPartProps } from '../../../types';
import type { ParseContentPartToChunkProps } from './types';

export function ParseContentPartToChunk({ children, contentParts }: ParseContentPartToChunkProps): ReactElement {
  const getChunkComponent = (contentPart: ContentPartProps): ChunkComponentWithPropsInObject => {
    return {
      props: contentPart,
      ChunkComponent: contentPart.type ? (chunksMap.get(contentPart.type) || EmptyChunk) : EmptyChunk,
    };
  };

  const transformContentPartToChunkComponent = compose(getChunkComponent);

  const parseAndFilterContentParts = (parts: Array<ContentPartProps>): ChunkComponentWithPropsInObject[] => map(transformContentPartToChunkComponent, parts);

  const chunkComponents: Array<ChunkComponentWithPropsInObject> = parseAndFilterContentParts(contentParts);

  return (<>{children({ chunkComponents })}</>);
};
