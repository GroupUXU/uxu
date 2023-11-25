import type { Chunk } from '../../../../../../../../types';
import type { SubPartInfo } from '../../../../types';
import type { SubChunkHasType } from "./types";

const subPartTypesForCharacterCounting: Set<string> = new Set<string>(['ContentPartText']);

export function extractInfoFromSubPart(subChunk: Chunk): SubPartInfo {
  const chunk = subChunk as SubChunkHasType;
  const value = chunk.value ?? '';
  const __typename = chunk.__typename ?? '';

  return {
    charactersInSubPart: subPartTypesForCharacterCounting.has(__typename) ? value.length : 0,
    typeNameSubPart: __typename
  };
}
