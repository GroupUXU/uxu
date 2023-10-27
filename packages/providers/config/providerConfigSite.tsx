import type { PropsWithChildren } from 'react';
import React, { useState, createContext } from 'react';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { SiteIdEnums } from 'utils';
import type { SiteConfigTypes } from 'utils';

const initialSiteConfigContext: SiteConfigTypes = {
  ads: {
    enabled: true
  },
  analytics: {
    gtmId: ""
  },
  graphql: {
    productId: SiteIdEnums.DEFAULT,
    url: '',
  },
  port: 4200,
  projectName: '',
  site: {
    id: SiteIdEnums.DEFAULT,
    locale: '',
    domain: '',
    slug: "/",
    brand: "uxu",
    shortBrand: "uxu",
    defaultCover: '/defaultCover.png',
    canonicalUrl: ``,
    title: '',
    shortname: '',
    description: '',
    authEnabled: false,
    switchTheme: true,
    themeDefault: 'dark',
    images: [],
  },
  social: {
    facebook: {
      pageId: ''
    }
  },
  client: {
    locale: 'pl',
    platform: {
      isDesktop: false,
      isMobile: false,
    },
    osInfo: {
      isWindows: false,
      isLinux: false,
      isMacOS: false,
    }
  }
};

export const SiteConfigContext = createContext<SiteConfigTypes>(initialSiteConfigContext);

type SiteConfigProviderProps = PropsWithChildren<{
  SITE_CONFIG: (clientLocale: string, isMobilePlatform: boolean, router: NextRouter, osInfo: { isWindows: boolean, isLinux: boolean, isMacOS: boolean }) => SiteConfigTypes;
  clientLocale: string;
  isMobilePlatform: boolean;
  osInfo: { isWindows: boolean, isLinux: boolean, isMacOS: boolean }
}>;

export function SiteConfigProvider({ SITE_CONFIG, children, clientLocale, isMobilePlatform, osInfo }: SiteConfigProviderProps): JSX.Element {
  const router = useRouter();
  const [config, _] = useState(() => SITE_CONFIG(clientLocale, isMobilePlatform, router, osInfo));

  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
}
