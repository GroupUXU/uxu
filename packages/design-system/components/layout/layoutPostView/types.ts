import type { PropsWithChildren } from "react";
import type { NextSeoProps } from "next-seo";
import type { FooterProps } from "../../templates/footer/types";
import type { SearchEngine } from "../components/headerLeftComponents/types";
import type { SearchEngineConfig } from "../../../utils";
import type { SearchSuggestionsArrayEngineInModal } from "../../organisms/searchEngine/searchEngineInModal/types";

export type LayoutPostViewProps = PropsWithChildren<{
  seo?: NextSeoProps;
  footer: FooterProps;
  searchEngineConfig: SearchEngineConfig<SearchSuggestionsArrayEngineInModal>;
  headerMenu: Array<{ slug: string, title: string }>;
  searchEngine?: SearchEngine;
  topElement?: JSX.Element | Array<JSX.Element>;
  siteBarLeft?: JSX.Element | Array<JSX.Element>;
}>
