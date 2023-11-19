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
  projectName: 'getReturn',
  site: {
    id: SiteIdEnums.WTRASIE,
    locale,
    domain: 'getReturn.pl',
    slug: '/',
    brand: "getReturn",
    shortBrand: "getReturnShort",
    defaultCover: 'https://getReturn.pl/defaultCover.png',
    canonicalUrl: `https://getReturn.pl`,
    images: [{url: 'https://getReturn.pl/defaultCover.png'}],
    title: 'GetReturn - Sankcja darmowego kredytu',
    shortname: 'gr',
    description: 'getReturn',
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
      name: "GetReturn Sp. z o.o.",
      street: "Gen. Władysława Sikorskiego 111/314",
      postCode: "66-400",
      city: "Gorzów Wielkopolski",
      tax: {
        pl: {
          nip: '5993278328',
          krs: '0001056045',
          regon: '526270293',
          shareCapitalInPLN: 20000,
          accountsBank: [{bank: "Nest Bank", iban: "PL 02 1870 1045 2078 1078 6238 0001"}]
        }
      },
      contact: {
        pl: {
          email: [{type: "main", email: "kontakt@getreturn.pl"}],
          phone: [{type: "mobile", number: "662 118 359"}]
        }
      }
    }
  }
};
