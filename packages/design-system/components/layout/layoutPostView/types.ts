import type { ReactElement } from "react";
import type { NextSeoProps } from "next-seo";
import type { SearchEngineConfig, PostFull } from "utils";
import type { FooterProps } from "../../templates/footer/types";
import type { SearchSuggestionContentDetails } from "../../organisms/searchEngine/searchEngineInModal/types";

export type LayoutPostViewProps = {
  seo?: NextSeoProps;
  footer: FooterProps;
  postViewData?: PostFull;
  searchEngineConfig: SearchEngineConfig<Array<SearchSuggestionContentDetails>>;
  headerMenu: Array<{ href: string, title: string }>;
  topElement?: ReactElement | Array<ReactElement>;
};
