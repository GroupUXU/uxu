import type { NextPageContext } from 'next';
import type { DocumentContext } from "next/document";
import type { SiteConfig } from '../../types';

export function getMobilePlatformStatusFromRequest( ctx: NextPageContext | DocumentContext ): SiteConfig['client']['platform'] {
  const isMobile: boolean = ctx.req?.headers['uxu-ismobileplatform'] === 'true';

  return { isMobile, isDesktop: !isMobile }
};