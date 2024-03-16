import type { GetSearchQuery } from "queries";
import { createSlugForType, createSlug } from 'utils';
import type { SearchSuggestionContentDetails } from '../../types';

export function adapterSearchData(data?: GetSearchQuery): Array<SearchSuggestionContentDetails> {
  if (!data?.searchResults.hits) return [];
  
  return data.searchResults.hits
     .filter((post): post is NonNullable<typeof post> => Boolean(post))
     .map((post) => {
       const slug = `${createSlugForType(post.type)}/${post.id}/${createSlug(post.title)}`;
       const type = post.type;
       const { title, lead } = post;
       return { slug, type, title, lead } as SearchSuggestionContentDetails;
     });
}
