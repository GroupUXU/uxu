import type { SearchEngineConfig } from "utils";
import type { SearchSuggestionContentDetails } from 'design-system/components/organisms/searchEngine/searchEngineInModal/types';


export const CONFIG_SEARCH_ENGINE: SearchEngineConfig<Array<SearchSuggestionContentDetails>> = {
  searchClientData: {
    indexName: 'article',
    api: {
      url: process.env.NEXT_PUBLIC_LINK_API_SEARCH || "",
      auth: process.env.NEXT_PUBLIC_AUTH_API_SEARCH || "",
    }
  },
  defaultSugestions: []
};
