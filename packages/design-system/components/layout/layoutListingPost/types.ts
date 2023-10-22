import type { PropsWithChildren } from "react";
import type { NextSeoProps } from "next-seo";
import type { FooterProps } from "../../templates/footer/types";
import type { SearchEngineConfig } from "../../../utils";
import type { SearchSuggestionContentDetails } from "../../organisms/searchEngine/searchEngineInModal/types";

export type LayoutListingPostProps = PropsWithChildren<{
  seo?: NextSeoProps;
  footer: FooterProps;
  searchEngineConfig: SearchEngineConfig<Array<SearchSuggestionContentDetails>>;
  headerMenu: Array<{ slug: string, title: string }>;
  topElement?: JSX.Element | Array<JSX.Element>;
  siteBarLeft?: JSX.Element | Array<JSX.Element>;
  siteBarRight?: JSX.Element | Array<JSX.Element>;
}>
