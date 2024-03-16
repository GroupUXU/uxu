import {useEffect, useState, useCallback} from "react";
import {useGetSearchQuery} from 'queries';
import {adapterSearchData} from "../adapters/adapterSearchData";
import type {SearchSuggestionContentDetails} from "../types";

type UseSearchResultsReturn = { isWaitingForQuery: boolean, setSearchQuery: (query: string) => void, searchResults: Array<SearchSuggestionContentDetails> }

export function useSearchResults(): UseSearchResultsReturn {
		const {refetch} = useGetSearchQuery({skip: true});
		const [searchQuery, setSearchQuery] = useState("");
		const [state, setState] = useState<{ isWaitingForQuery: boolean; searchResults: Array<SearchSuggestionContentDetails>; }>({
				isWaitingForQuery: false,
				searchResults: [],
		});
		
		const fetchSearchResults = useCallback(async () => {
				if (!searchQuery) {
						setState(prev => ({...prev, searchResults: []}));
						return;
				}
				
				setState(prev => ({...prev, isWaitingForQuery: true}));
				try {
						const {data} = await refetch({query: searchQuery});
						setState(prev => ({...prev, searchResults: adapterSearchData(data)}));
				} catch (error) {
						/* empty */
				} finally {
						setState(prev => ({...prev, isWaitingForQuery: false}));
				}
		}, [searchQuery, refetch]);
		
		useEffect(() => {
				void fetchSearchResults();
		}, [fetchSearchResults]);
		
		return {
				isWaitingForQuery: state.isWaitingForQuery,
				setSearchQuery,
				searchResults: state.searchResults
		};
};
