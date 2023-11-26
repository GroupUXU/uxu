import type { ReactElement } from 'react';
import type { TransformChunkToComponentProps } from './types';

export function transformChunkToComponent({ ChunkComponent, props }: TransformChunkToComponentProps): ReactElement {
  return <ChunkComponent {...props} key={props.id} />;
}
