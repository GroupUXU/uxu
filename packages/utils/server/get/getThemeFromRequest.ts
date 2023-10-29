import { SiteConfigProps } from "../../types";
import { NextPageContext } from 'next';
import { DocumentContext } from "next/document";

export function getThemeFromRequest( ctx: NextPageContext | DocumentContext): SiteConfigProps['theme'] {
  return ctx.req?.headers['theme'] === 'dark' ? 'dark' : 'light';
};