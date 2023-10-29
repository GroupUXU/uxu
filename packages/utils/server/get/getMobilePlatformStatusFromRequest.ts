import type { NextPageContext } from 'next';
import type { DocumentContext } from "next/document";

export function getMobilePlatformStatusFromRequest( ctx: NextPageContext | DocumentContext ): boolean {
  return ctx.req?.headers[ 'x-is-mobile-platform' ] === 'true';
};