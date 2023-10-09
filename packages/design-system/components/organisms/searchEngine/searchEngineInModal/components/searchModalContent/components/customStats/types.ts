import type { SearchSuggestionsArrayEngineInModal } from "../../../../types";

export type CustomStatsProps = { suggestions: SearchSuggestionsArrayEngineInModal, onMouseEnter: ( index: number ) => void; currentHoveredSuggestionIndex: number }