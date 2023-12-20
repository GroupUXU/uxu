import { SiteIdEnums } from "utils";
import type { SiteConfig, AdSlotsMap } from "utils";

const adSlotsMap: AdSlotsMap = new Map([
  ['2XDXLEADX1', { id: 23024113287, code: 'X', size: { width: 300, height: 250 } }],
  ['2XDXSITEBARLEFTX1', { id: 23024391190, code: 'X', size: { width: 160, height: 600 } }],
  ['2XDXSITEBARRIGHTX1', { id: 23024993204, code: 'X', size: { width: 300, height: 600 } }],
  ['2XMXAMIDTEXTX1', { id: 23028263960, code: 'X', size: { width: 300, height: 100 } }],
  ['2XMXAMIDTEXTX2', { id: 23027421702, code: 'X', size: { width: 300, height: 100 } }],
  ['2XMXAMIDTEXTX3', { id: 23027421927, code: 'X', size: { width: 300, height: 100 } }],
  ['2XDXAMIDTEXTX1', { id: 23024993204, code: 'X', size: { width: 468, height: 250 } }],
  ['2XDXAMIDTEXTX2', { id: 23028262250, code: 'X', size: { width: 468, height: 250 } }],
  ['2XDXAMIDTEXTX3', { id: 23027418279, code: 'X', size: { width: 468, height: 250 } }],
  ['1XDXWIDEBOARDX1', { id: 23024405779, code: 'X', size: { width: 970, height: 250 } }],
  ['1XMXWIDEBOARDX1', { id: 23024126889, code: 'X', size: { width: 300, height: 100 } }],
])

export const locale = 'pl';

export const siteConfig: SiteConfig = {
  marketingToolsConfig: {
    googleTagManagerId: 'GTM-MC3DNS7',
    googleAdManagerId: '23023978625',
    adSlotsMap,
  },
  port: 3000,
  projectName: 'aua',
  site: {
    id: SiteIdEnums.AUA,
    locale,
    domain: 'aua.pl',
    slug: '/',
    brand: "aua",
    shortBrand: "aua",
    defaultCover: 'https://aua.pl/defaultCover.png',
    canonicalUrl: `https://aua.pl`,
    images: [{url: 'https://getReturn.pl/defaultCover.png'}],
    title: 'Aua - Sankcja darmowego kredytu',
    shortname: 'aua',
    description: 'Aua',
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
          accountsBank: [{bank: "Nest Bank", iban: "PL92 2530 0008 2047 1060 6663 0001"}]
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
