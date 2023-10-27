import type { SiteConfigTypes} from "utils";
import { SiteIdEnums } from "utils";
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
    id: SiteIdEnums.GETRETURN,
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
    },
    twitter: {
      accountName: '100091647886192'
    },
    youtube: {
      channelId: '100091647886192'
    },
    instagram: {
      accountName: '100091647886192'
    },
    github: {
      accountName: '100091647886192'
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
