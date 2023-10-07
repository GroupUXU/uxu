import type { SiteConfigTypes} from "design-system";
import { SiteIdEnums } from "design-system";
import type { NextRouter } from "next/router";

export const locale = 'pl';

export const SITE_CONFIG = ( clientLocale: string, isMobilePlatform: boolean, router: NextRouter, osInfo: { isWindows: false,  isLinux: false, isMacOS: false } ): SiteConfigTypes => ({
  ads: {
    enabled: true
  },
  analytics: {
    gtmId: "GTM-MC3DNS7"
  },
  port: 4200,
  projectName: 'getReturn',
  site: {
    id: SiteIdEnums.WTRASIE,
    locale,
    domain: 'getreturn.pl',
    slug:   router.asPath,
    brand: "getReturn",
    shortBrand: "getReturn",
    defaultCover: 'https://getreturn.pl/defaultCover.png',
    canonicalUrl: `https://getreturn.pl${router.asPath}`,
    images: [{ url: 'https://getreturn.pl/ogWTrasie.png' }],
    title: 'Getreturn - Kredyty',
    shortname: 'wt',
    description: 'getreturn.pl - ok',
    authEnabled: false,
    switchTheme: true,
    themeDefault: 'dark',
  },
  social: {
    facebook: {
      pageId: '100091647886192'
    }
  },
  client: {
    locale: clientLocale,
    platform: {
      isDesktop: !isMobilePlatform,
      isMobile: isMobilePlatform,
    },
    osInfo
  }
});
