import type { NextPageContext } from 'next';
import type { DocumentContext } from "next/document";

export function getClientLocaleFromRequest(ctx: NextPageContext | DocumentContext ): string {
  return ctx.req?.headers["accept-language"] || 'default-locale';
};