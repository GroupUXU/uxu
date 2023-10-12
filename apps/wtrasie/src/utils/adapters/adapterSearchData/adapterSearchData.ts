import { createSlug } from 'design-system';
import type { SearchSuggestionsArrayEngineInModal, SearchSuggestionEngineInModal } from 'design-system';
import type { GetSearchQuery } from '../../../gql';
import { createSlugForType } from '../../function';

export function adapterSearchData(data: GetSearchQuery | undefined): SearchSuggestionsArrayEngineInModal {
  if (!data?.searchResults.hits) return [];

  return data.searchResults.hits
    .filter(function filterNonNullPosts(post): post is NonNullable<typeof post> {
      return Boolean(post);
    })
    .map(function mapPostToSuggestion(post) {
      const slug = `${createSlugForType(post.type)}/${createSlug(post.title)}`;
      const type = "post"
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
