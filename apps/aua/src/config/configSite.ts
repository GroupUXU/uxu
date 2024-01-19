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
    googleTagManagerId: 'GTM-PHDNXTHH',
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
    images: [{url: 'https://aua.pl/defaultCover.png'}],
    title: 'Aua - Sankcja darmowego kredytu',
    shortname: 'aua',
    description: 'Aua',
    authEnabled: false,
    switchTheme: true,
    theme: 'dark',
  },
  social: {
    facebook: {
      pageId: 'auapoland'
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
      name: "UXU Group Sp. z o.o.",
      street: "Święty Marcin 29/8",
      postCode: "61-806",
      city: "Poznań",
      tax: {
        pl: {
          nip: '7831894877',
          krs: '0001079836',
          regon: '527391780',
          accountsBank: [{bank: "Nest Bank", iban: "PL69 2530 0008 2022 1080 2055 0001"}]
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
