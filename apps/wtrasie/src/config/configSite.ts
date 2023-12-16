import { SiteIdEnums } from "utils";
import type { SiteConfig, AdSlotsMap } from "utils";

const adSlotsMap: AdSlotsMap = new Map([
  ['2XDXLEADX1', { id: 23024113287, code: 'WTRASIEPL300X250X2XDXLEADX1', size: { width: 300, height: 250 } }],
  ['2XDXSITEBARLEFTX1', { id: 23024391190, code: 'WTRASIEPL160X600X2XDXSITEBARLEFTX1', size: { width: 160, height: 600 } }],
  ['2XDXSITEBARRIGHTX1', { id: 23024993204, code: 'WTRASIEPL300X600X2XDXSITEBARRIGHTX1', size: { width: 300, height: 600 } }],
  ['2XMXAMIDTEXTX1', { id: 23028263960, code: 'WTRASIEPL300X100X2XMXAMIDTEXTX1', size: { width: 300, height: 100 } }],
  ['2XMXAMIDTEXTX2', { id: 23027421702, code: 'WTRASIEPL300X100X2XMXAMIDTEXTX2', size: { width: 300, height: 100 } }],
  ['2XMXAMIDTEXTX3', { id: 23027421927, code: 'WTRASIEPL300X100X2XMXAMIDTEXTX3', size: { width: 300, height: 100 } }],
  ['2XDXAMIDTEXTX1', { id: 23024993204, code: 'WTRASIEPL468X250X2XDXAMIDTEXTX1', size: { width: 468, height: 250 } }],
  ['2XDXAMIDTEXTX2', { id: 23028262250, code: 'WTRASIEPL468X250X2XDXAMIDTEXTX2', size: { width: 468, height: 250 } }],
  ['2XDXAMIDTEXTX3', { id: 23027418279, code: 'WTRASIEPL468X250X2XDXAMIDTEXTX3', size: { width: 468, height: 250 } }],
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
      name: "MSJ Michał Wojsław",
      street: "al. Aleja Bohaterów Monte Cassino 10/41",
      postCode: "42-217",
      city: "Częstochowa",
      tax: {
        pl: {
          nip: '5732853839',
          regon: '361022789',
        }
      },
      contact: {
        pl: {
          email: [{type: "main", email: "biuro.msj@gmail.com"}],
          phone: [{type: "mobile", number: "536 000 005"}]
        }
      }
    }
  }
};
