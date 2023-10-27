import type { SearchEngineConfig } from "utils";
import type { SearchSuggestionContentDetails } from "../../../organisms/searchEngine/searchEngineInModal/types";

export type HeaderLeftComponentsProps = {
  isLinkActive: (slug: string) => boolean;
  headerMenu: Array<{ slug: string, title: string }>;
  searchEngineConfig: SearchEngineConfig<Array<SearchSuggestionContentDetails>>;
};
