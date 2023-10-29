import { SiteConfigProps } from "../../types";
import type { NextPageContext } from 'next';
import type { DocumentContext } from "next/document";

export function getOSInfoFromRequest(ctx: NextPageContext | DocumentContext): SiteConfigProps['osInfo'] {
  const isWindows: boolean = ctx.req?.headers['uxu-iswindows'] === 'true';
  const isLinux: boolean = ctx.req?.headers['uxu-islinux'] === 'true';
  const isMacOS: boolean = ctx.req?.headers['uxu-ismacos'] === 'true';

  return {
    isWindows,
    isLinux,
    isMacOS,
  };
};