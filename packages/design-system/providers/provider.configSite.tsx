import type { PropsWithChildren, ReactElement } from 'react';
import { useState, createContext } from 'react';
import { SiteIdEnums } from 'utils';
import type { SiteConfig, SiteConfigContextProps } from 'utils';

const initialSiteConfigContext: { config: SiteConfig, setConfig: (newConfig: SiteConfig) => void } = {
  config: {
    admin: {},
    cookieConsentSettings: {
      ads: false,
      analytics: false
    },
    marketingToolsConfig: {},
    port: 3000,
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
      theme: 'dark',
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
  },
  setConfig: (): void => { /* empty */ }
};

export const SiteConfigContext = createContext<SiteConfigContextProps>(initialSiteConfigContext);

type SiteConfigProviderProps = PropsWithChildren<{ siteConfig: SiteConfig }>;

export function SiteConfigProvider ({ children, siteConfig }: SiteConfigProviderProps ): ReactElement {
  const [config, setConfig] = useState (siteConfig);

  return (
    <SiteConfigContext.Provider value={{ config , setConfig }}>
      {children}
    </SiteConfigContext.Provider>
  );
}
