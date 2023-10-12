import type { ReactElement } from "react";
import { useHits } from "react-instantsearch";
import { adapterSearchData } from "../../../../adapters/adapterSearchData";
import { SuggestionList } from "../suggestionList";
import type { SearchSuggestionsArrayEngineInModal } from "../../../../types";
import type { SearchResultProps } from "./types";

export function SearchResult({ onMouseEnter, currentHoveredSuggestionIndex }: SearchResultProps): ReactElement {
  const { hits } = useHits();

  const suggestions = hits.map ( hit => adapterSearchData ( hit ) ).filter ( Boolean ) as unknown as SearchSuggestionsArrayEngineInModal;

  return (
    <SuggestionList
      currentHoveredSuggestionIndex={currentHoveredSuggestionIndex}
      listType="defaultSuggestions"
      onMouseEnter={onMouseEnter}
      suggestions={suggestions}
    />
  );
}