import { useQuery } from '@apollo/client';
import type { SearchSuggestionContentDetails } from 'design-system/components/organisms/searchEngine/searchEngineInModal/types';
import type { GetSearchQuery } from "../gql";
import { GET_SEARCH } from "../gql";
import { adapterSearchData } from '../utils/adapters/adapterSearchData';

export function useSearch(): (searchQuery: string) => Promise<{ searchResults: Array<SearchSuggestionContentDetails> }> {
  const { refetch } = useQuery<GetSearchQuery>(GET_SEARCH, { skip: true });

  const onSearchQuery = async (searchQuery: string): Promise<{ searchResults: Array<SearchSuggestionContentDetails> }> => {
    const { data } = await refetch({ query: searchQuery });
    return { searchResults: adapterSearchData(data) };
  };

  return onSearchQuery;
}
