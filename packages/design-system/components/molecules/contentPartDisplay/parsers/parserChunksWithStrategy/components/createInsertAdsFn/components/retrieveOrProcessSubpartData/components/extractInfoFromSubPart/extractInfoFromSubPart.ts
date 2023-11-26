import type { Chunk } from '../../../../../../../../types';
import { ContentPartEnum } from '../../../../../../../../enums';
import type { SubPartInfo } from '../../../../types';

const subPartTypesForCharacterCounting: Set<ContentPartEnum> = new Set<ContentPartEnum>([ContentPartEnum.PARAGRAPH]);

export function extractInfoFromSubPart(chunk: Chunk): SubPartInfo {
  const value: string = String(chunk.props.value) || '';
  const type: ContentPartEnum = chunk.props.type;

  return {
    charactersInSubPart: subPartTypesForCharacterCounting.has(type) ? value.length : 0,
    typeNameSubPart: type
  };
}
