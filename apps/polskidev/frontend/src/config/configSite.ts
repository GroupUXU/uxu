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
    googleTagManagerId: 'GTM-N2Z7W233',
    googleAdManagerId: '23023978625',
    adSlotsMap,
  },
  port: 3000,
  projectName: 'polskidev',
  site: {
    id: SiteIdEnums.POLSKIDEV,
    locale,
    domain: 'https://polski.dev',
    slug: '/',
    brand: "polskidev",
    shortBrand: "polskidevshort",
    defaultCover: 'https://polski.dev/defaultCover.png',
    canonicalUrl: `https://polski.dev`,
    images: [{url: 'https://polski.dev/og.png'}],
    title: 'Polski DEV - blog dla każdego programisty',
    shortname: 'pldev',
    description: 'Polski.dev - inspiracje, porady i trendy w IT dla programistów',
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
      name: "UXU Group",
      street: "Święty Marcin 29 / 8",
      postCode: "61-806",
      city: "Poznań",
      tax: {
        pl: {
          nip: '7831894877',
          regon: '527391780',
          krs: '0001079836',
        }
      },
      contact: {
        pl: {
          email: [{type: "main", email: "hello@uxu.pl"}],
          phone: [{type: "mobile", number: "+48 888 333 885"}]
        }
      }
    }
  }
};
