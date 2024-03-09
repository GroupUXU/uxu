import type { PropsWithChildren, ReactElement } from 'react';
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import type { SiteConfig } from "utils";
import { ToastChunksContext, ProviderToastChunks, toastChunksInitial, CookieDetails, AllowCookies } from '../components/organisms/toast';
import { ApolloCLientProvider } from './provider.apollo';
import { SiteConfigProvider } from './provider.configSite';
import { SEOProvider } from './provider.seo';

type WrapperProvidersProps = PropsWithChildren<{
  siteConfig: SiteConfig,
  apolloClient: ApolloClient<NormalizedCacheObject>
}>;

export function WrapperProviders({ children, siteConfig, apolloClient }: WrapperProvidersProps): ReactElement {
  const toastChunks = toastChunksInitial([
    {
      shouldBeIncluded: Boolean(!siteConfig.cookieConsentSettings.analytics),
      id: 'cookieInfoDefault',
      props: {
        actions: [
          {
            Component: <CookieDetails ToastChunksContext={ToastChunksContext} siteConfig={siteConfig} />
          },
          {
            Component: <AllowCookies ToastChunksContext={ToastChunksContext} />,
            type: 'remove'
          }
        ],
        text: "Korzystamy z plików cookie, aby mierzyć i ulepszać Twoje doświadczenia.",
      }
    }
  ]);

  return (
    <SiteConfigProvider siteConfig={siteConfig}>
      <ProviderToastChunks toastChunksInitial={toastChunks}>
        <SEOProvider siteConfig={siteConfig}>
          <ApolloCLientProvider apolloClient={apolloClient}>
            {children}
          </ApolloCLientProvider>
        </SEOProvider>
      </ProviderToastChunks>
    </SiteConfigProvider>
  );
}
