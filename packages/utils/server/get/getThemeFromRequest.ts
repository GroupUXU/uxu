import { SiteConfig } from "../../types";
import { NextPageContext } from 'next';
import { DocumentContext } from "next/document";

export function getThemeFromRequest( ctx: NextPageContext | DocumentContext): SiteConfig['site']['theme'] {
  return ctx.req?.headers['theme'] === 'light' ? 'light' : 'dark';
};