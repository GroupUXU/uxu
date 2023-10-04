import type { ReactElement} from 'react';
import type { TransformChunkToComponentProps } from './types';

export function transformChunkToComponent({ ChunkComponent, props }: TransformChunkToComponentProps): ReactElement {
  // @ts-expect-error -- it is ok
  return <ChunkComponent {...props} key={props.id} />;
}
