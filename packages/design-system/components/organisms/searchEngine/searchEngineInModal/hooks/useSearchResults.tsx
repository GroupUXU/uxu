import { useEffect, useState } from "react";
import type { SearchSuggestionContentDetails } from "../types";

export type OnSearchQueryType = (searchQuery: string) => Promise<{ searchResults: SearchSuggestionContentDetails[] }>;

export const useSearchResults = (
  searchQuery: string,
  onSearchQuery?: OnSearchQueryType
): { isAwaitingApiResponse: boolean; searchResults: SearchSuggestionContentDetails[] } => {
  const [isAwaitingApiResponse, setIsAwaitingApiResponse] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<SearchSuggestionContentDetails[]>([]);

  useEffect(() => {
    let isActive = true;

    const fetchSearchResults = async (): Promise<void> => {  // Added return type here
      if (onSearchQuery) {
        setIsAwaitingApiResponse(true);
        try {
          const res = await onSearchQuery(searchQuery);
          if (isActive) {
            setIsAwaitingApiResponse(false);
            setSearchResults(res.searchResults);
          }
        } catch (error) {
          if (isActive) {
            setIsAwaitingApiResponse(false);
          }
        }
      }
    };

    if (searchQuery?.length > 1) {
      void fetchSearchResults();
    } else {
      setSearchResults([]);
    }

    return () => {
      isActive = false;
    };
  }, [searchQuery, onSearchQuery]);

  return { isAwaitingApiResponse, searchResults };
};
