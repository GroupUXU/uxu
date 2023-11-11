import type { PropsWithChildren } from "react";
import type { NextSeoProps } from "next-seo";
import type { SearchEngineConfig } from "utils";
import type { FooterProps } from "../../templates/footer/types";
import type { SearchSuggestionContentDetails } from "../../organisms/searchEngine/searchEngineInModal/types";

export type LayoutPostViewProps = PropsWithChildren<{
  seo?: NextSeoProps;
  footer: FooterProps;
  searchEngineConfig: SearchEngineConfig<Array<SearchSuggestionContentDetails>>;
  headerMenu: Array<{ href: string, title: string }>;
  topElement?: JSX.Element | Array<JSX.Element>;
  siteBarLeft?: JSX.Element | Array<JSX.Element>;
}>
