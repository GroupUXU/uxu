import { useEffect, useState, useCallback } from "react";
import { useGetSearchQuery } from 'queries';
import { adapterSearchData } from "../adapters/adapterSearchData";
import type { SearchSuggestionContentDetails } from "../types";

export const useSearchResults = (): { isWaitingForQuery: boolean, setSearchQuery: (query: string) => void, searchResults: Array<SearchSuggestionContentDetails> } => {
  const { refetch } = useGetSearchQuery({ skip: true });
  const [isWaitingForQuery, setIsWaitingForQuery] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<SearchSuggestionContentDetails>>([]);

  const fetchSearchResults = useCallback(async () => {
    if (typeof searchQuery !== "string" || searchQuery.length === 0) {
      setSearchResults([]);
      return;
    }

    setIsWaitingForQuery(true);
    try {
      const { data} = await refetch({ query: searchQuery });
      console.log(data)
      setSearchResults(adapterSearchData(data));
    } catch (error) { /* empty */ } finally  { setIsWaitingForQuery(false); }
  }, [searchQuery, refetch]);



  useEffect(() => {
    void fetchSearchResults();
  }, [searchQuery, fetchSearchResults]);

  return { isWaitingForQuery, setSearchQuery, searchResults };
};