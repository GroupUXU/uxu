import { SiteIdEnums } from "utils";
import type { SiteConfig, AdSlotsMap } from "utils";

const adSlotsMap: AdSlotsMap = new Map([
  ['2XDXLEADX1', { id: 23024113287, code: 'WTRASIEPL300X250X2XDXLEADX1', size: { width: 300, height: 250 } }],
  ['2XDXSITEBARLEFTX1', { id: 23024391190, code: 'WTRASIEPL160X600X2XDXSITEBARLEFTX1', size: { width: 160, height: 600 } }],
  ['2XDXSITEBARRIGHTX1', { id: 23024993204, code: 'WTRASIEPL300X600X2XDXSITEBARRIGHTX1', size: { width: 300, height: 600 } }],
  ['1XDXWIDEBOARDX1', { id: 23024405779, code: 'WTRASIEPL970X250X1XDXWIDEBOARDX1', size: { width: 970, height: 250 } }],
  ['1XMXWIDEBOARDX1', { id: 23024126889, code: 'WTRASIEPL300X100X1XMXWIDEBOARDX1', size: { width: 300, height: 100 } }],
])

export const locale = 'pl';

export const siteConfig: SiteConfig = {
  marketingToolsConfig: {
    googleTagManagerId: 'GTM-MC3DNS7',
    googleAdManagerId: '23023978625',
    adSlotsMap,
  },
  port: 3000,
  projectName: 'wTrasie',
  site: {
    id: SiteIdEnums.WTRASIE,
    locale,
    domain: 'wtrasie.pl',
    slug: '/',
    brand: "wTrasie",
    shortBrand: "wTrasieShort",
    defaultCover: 'https://wtrasie.pl/defaultCover.png',
    canonicalUrl: `https://wtrasie.pl`,
    images: [{url: 'https://wtrasie.pl/ogWTrasie.png'}],
    title: 'wTrasie - Wszystko co ważne w trasie',
    shortname: 'wt',
    description: 'wTrasie.pl - W Trasie, informacje prosto z trasy i ulic Twojego miasta. informacje na temat wypadków, wydarzeń oraz firm przydatnych w trasie',
    authEnabled: false,
    switchTheme: true,
    theme: 'dark',
  },
  social: {
    facebook: {
      pageId: '100091647886192'
    }
  },
  client: {
    locale,
    platform: {
      isDesktop: false,
      isMobile: false,
    },
    osInfo: {
      isWindows: false,
      isLinux: false,
      isMacOS: false,
    },
  },
  cookieConsentSettings: {
    ads: false,
    analytics: false
  },
  admin: {
    company: {
      name: "Na3 Sp. z o.o.",
      street: "Serwituty 25",
      postCode: "02-233",
      city: "Warszawa",
      tax: {
        pl: {
          nip: '5223077290',
          krs: '0000649985',
          regon: '365979030',
          shareCapitalInPLN: 5000,
          accountsBank: [{bank: "Nest Bank", iban: "PL 65 2530 0008 2047 1060 6663 0002"}]
        }
      },
      contact: {
        pl: {
          email: [{type: "main", email: "hello@uxu.pl"}],
          phone: [{type: "mobile", number: "888 333 885"}]
        }
      }
    }
  }
};
