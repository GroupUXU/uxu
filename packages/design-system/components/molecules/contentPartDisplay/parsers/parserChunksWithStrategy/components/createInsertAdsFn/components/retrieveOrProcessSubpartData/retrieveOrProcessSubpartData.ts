import type { Chunk } from '../../../../../../types';
import type { SubPartInfo } from '../../types';
import type { RetrieveOrProcessSubpartDataProps } from './types';
import { extractInfoFromSubPart } from './components/extractInfoFromSubPart/extractInfoFromSubPart';

export function retrieveOrProcessSubpartData({ chunk, processedSubpartInfoCache }: RetrieveOrProcessSubpartDataProps): SubPartInfo {
  if (processedSubpartInfoCache.has(chunk)) {
    return (
      processedSubpartInfoCache.get(chunk) ?? {
        charactersInSubPart: 0,
        typeNameSubPart: '',
      }
    );
  }

  let typeNameSubPart = '';
  let charactersInSubPart = 0;

  Array.isArray(chunk.props.subChunks) &&
    chunk.props.subChunks.forEach((subChunk: Chunk) => {
      const result: SubPartInfo = extractInfoFromSubPart(subChunk);
      charactersInSubPart += result.charactersInSubPart;
      typeNameSubPart = result.typeNameSubPart;
    });

  const result = { charactersInSubPart, typeNameSubPart };
  processedSubpartInfoCache.set(chunk, result);
  return result;
}
