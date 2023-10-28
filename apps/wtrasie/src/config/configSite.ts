import type { SiteConfig, SiteConfigProps } from "utils";
import { SiteIdEnums } from "utils";

export const locale = 'pl';

export const SITE_CONFIG = ({ theme, clientLocale, isMobilePlatform, router, osInfo }: SiteConfigProps): SiteConfig => ({
  ads: {
    enabled: true
  },
  analytics: {
    gtmId: "GTM-MC3DNS7"
  },
  port: 4200,
  projectName: 'wTrasie',
  site: {
    id: SiteIdEnums.WTRASIE,
    locale,
    domain: 'wtrasie.pl',
    slug: router.asPath,
    brand: "wTrasie",
    shortBrand: "wTrasieShort",
    defaultCover: 'https://wtrasie.pl/defaultCover.png',
    canonicalUrl: `https://wtrasie.pl${router.asPath}`,
    images: [{url: 'https://wtrasie.pl/ogWTrasie.png'}],
    title: 'wTrasie - Wszystko co ważne w trasie',
    shortname: 'wt',
    description: 'wTrasie.pl - W Trasie, informacje prosto z trasy i ulic Twojego miasta. informacje na temat wypadków, wydarzeń oraz firm przydatnych w trasie',
    authEnabled: false,
    switchTheme: true,
    theme,
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
