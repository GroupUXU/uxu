import type { SubPartInfo } from '../../types';
import { ContentPartEnum } from '../../../../../../enums';
import type { RetrieveOrProcessSubpartDataProps } from './types';
import { extractInfoFromSubPart } from './components/extractInfoFromSubPart/extractInfoFromSubPart';

export function retrieveOrProcessSubpartData({ chunk, processedSubpartInfoCache }: RetrieveOrProcessSubpartDataProps): SubPartInfo {

  if (processedSubpartInfoCache.has(chunk)) {
    return (
      processedSubpartInfoCache.get(chunk) ?? {
        charactersInSubPart: 0,
        typeNameSubPart: ContentPartEnum.EMPTY,
      }
    );
  }

  const result: SubPartInfo = extractInfoFromSubPart(chunk);

  processedSubpartInfoCache.set(chunk, result);

  return result;
}
