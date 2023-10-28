import { SiteConfigProps } from "../../types";
import type { NextPageContext } from 'next';
import type { DocumentContext } from "next/document";

export function getOSInfoFromRequest(ctx: NextPageContext | DocumentContext): SiteConfigProps['osInfo'] {
  const isWindows: boolean = ctx.req?.headers['x-is-windows'] === 'true';
  const isLinux: boolean = ctx.req?.headers['x-is-linux'] === 'true';
  const isMacOS: boolean = ctx.req?.headers['x-is-macos'] === 'true';

  return {
    isWindows,
    isLinux,
    isMacOS,
  };
};