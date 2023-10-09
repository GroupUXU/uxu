import type { RefObject } from "react";
import type { SearchSuggestionsArrayEngineInModal } from "../../types";
import type { SearchEngineConfig } from "../../../../../../utils";

export type SearchModalContentProps = {
  modalRef: RefObject<HTMLDivElement>;
  searchEngineConfig: SearchEngineConfig<SearchSuggestionsArrayEngineInModal>;
}
