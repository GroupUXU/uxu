import type { GetSearchQuery } from "queries";
import { createSlugForType, createSlug } from 'utils';
import type { SearchSuggestionContentDetails } from '../../types';

export function adapterSearchData(data?: GetSearchQuery): Array<SearchSuggestionContentDetails> {
  if (!data?.searchResults.hits) return [];

  return data.searchResults.hits
    .filter(function filterNonNullPosts(post): post is NonNullable<typeof post> {
      return Boolean(post);
    })
    .map(function mapPostToSuggestion(post) {
      const slug = `${createSlugForType(post.type)}/${post.id}/${createSlug(post.title)}`;
      const type = "post"
      const { title, lead } = post;

      return {
        slug,
        type,
        title,
        lead: lead.lead
      } as SearchSuggestionContentDetails;
    })
    .filter(function filterValidSuggestions(item): item is SearchSuggestionContentDetails {
      return Boolean(item.slug) && Boolean(item.type) && Boolean(item.title);
    });
}