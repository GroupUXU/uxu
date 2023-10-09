import type { SearchSuggestionEngineInModal } from '../../types';
import { createSlugForType, createSlug } from '../../../../../../utils';

export function adapterSearchData ( data: {
  id?: number,
  title?: string,
  lead?: { id?: number; lead?: string },
  type?: string | undefined
} ): SearchSuggestionEngineInModal | null {
  if ( !data.title || !data.lead?.lead ) return null;

  const {title, lead, type: dataType} = data;
  const type = "post";
  const slug = `${createSlugForType ( dataType || "" )}/${data.id}/${createSlug ( title )}`;

  return {
    slug,
    type,
    title,
    lead: lead.lead,
  };
}
