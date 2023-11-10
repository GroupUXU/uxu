import type { SiteConfig, SiteConfigProps } from "utils";
import { SiteIdEnums } from "utils";

export const locale = 'pl';

export const SITE_CONFIG = ( {
                               theme,
                               clientLocale,
                               isMobilePlatform,
                               router,
                               osInfo,
                               cookieConsentSettings
                             }: SiteConfigProps ): SiteConfig => ({
  ads: {
    enabled: true
  },
  analytics: {
    gtmId: "GTM-MC3DNS7"
  },
  port: 3000,
  projectName: 'getReturn',
  site: {
    id: SiteIdEnums.WTRASIE,
    locale,
    domain: 'getreturn.pl',
    slug: router.asPath,
    brand: "getReturn",
    shortBrand: "getReturnShort",
    defaultCover: 'https://getreturn.pl/defaultCover.png',
    canonicalUrl: `https://getreturn.pl${router.asPath}`,
    images: [{url: 'https://getreturn.pl/ogWTrasie.png'}],
    title: 'getReturn - kredyty',
    shortname: 'wt',
    description: 'getReturn.pl - kredyty',
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
  },
  cookieConsentSettings,
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
});
