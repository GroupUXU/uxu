import type { PropsWithChildren } from "react";
import type { NextSeoProps } from "next-seo";
import type { FooterProps } from "../../templates/footer/types";
import type { SearchEngine } from "../components/headerLeftComponents/types";

export type LayoutListingPostProps = PropsWithChildren<{
  seo?: NextSeoProps;
  footer: FooterProps;
  searchEngine?: SearchEngine;
  topElement?: JSX.Element | Array<JSX.Element>;
  siteBarLeft?: JSX.Element | Array<JSX.Element>;
  siteBarRight?: JSX.Element | Array<JSX.Element>;
}>
