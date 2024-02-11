import { SiteConfig } from "../../types";
import { NextPageContext } from 'next';
import { DocumentContext } from "next/document";

export function getRecIdFromRequest( ctx: NextPageContext | DocumentContext): { recid?: string | Array<string>, recidcookie?: string | Array<string> } {

  return { recid: ctx.req?.headers['recid'], recidcookie: ctx.req?.headers['recidcookie'] }
};