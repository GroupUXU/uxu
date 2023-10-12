import type { SearchSuggestionsArrayEngineInModal, SearchSuggestionEngineInModal } from '../../types';
import { createSlugForType, createSlug} from '../../../../../../utils';

function isArrayOfValidData(data: unknown): data is Array<{ title: string, type: string, lead: { lead: string } }> {
  return Array.isArray(data) && data.every(item =>
    typeof item === 'object' &&
    item !== null &&
    typeof item.title === 'string' &&
    typeof item.type === 'string' &&
    item.lead &&
    typeof item.lead.lead === 'string'
  );
}

export function adapterSearchData(data: unknown): SearchSuggestionsArrayEngineInModal {
  if (!isArrayOfValidData(data)) return [];

  return data
    .filter(function filterNonNullPosts(post): post is NonNullable<typeof post> {
      return Boolean(post);
    })
    .map(function mapPostToSuggestion(post) {
      const slug = `${createSlugForType(post.type)}/${createSlug(post.title)}`;
      const type = "post";
      const { title, lead } = post;

      return {
        slug,
        type,
        title,
        lead: lead.lead
      } as SearchSuggestionEngineInModal;
    })
    .filter(function filterValidSuggestions(item): item is SearchSuggestionEngineInModal {
      return Boolean(item.slug) && Boolean(item.type) && Boolean(item.title);
    });
}
