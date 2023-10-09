import type { SearchEngineConfig } from "../../../../utils";
import type { SearchSuggestionsArrayEngineInModal } from "../../../organisms/searchEngine/searchEngineInModal/types";

export type HeaderLeftComponentsProps = {
  isLinkActive: (slug: string) => boolean;
  headerMenu: Array<{ slug: string, title: string }>;
  searchEngineConfig: SearchEngineConfig<SearchSuggestionsArrayEngineInModal>;
};
