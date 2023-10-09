import type { SearchEngineConfig } from "../../../../utils";

export type SearchSuggestionEngineInModal = {
  slug: string;
  title: string;
  lead?: string;
  type: "post" | "page";
};

export type SearchSuggestionsArrayEngineInModal = Array<SearchSuggestionEngineInModal>;

export type OnSearchQuery = ( searchQuery: string ) => Promise<{ searchResults: SearchSuggestionsArrayEngineInModal }>

export type SearchEngineInModalProps = {
  className?: string;
  onSearchQuery?: OnSearchQuery;
  searchEngineConfig: SearchEngineConfig<SearchSuggestionsArrayEngineInModal>;
};
