import type { PropsWithChildren, ReactElement } from 'react';
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import type { SiteConfig } from "utils";
import { ApolloCLientProvider, SiteConfigProvider, SEOProvider } from './config';
import { ToastChunksContext, ProviderToastChunks, toastChunksInitial, CookieDetails, AllowCookies } from '../components/organisms';

type WrapperProvidersProps = PropsWithChildren<{
  siteConfig: SiteConfig,
  apolloClient: ApolloClient<NormalizedCacheObject>
}>;

export function WrapperProviders({ children, siteConfig, apolloClient }: WrapperProvidersProps): ReactElement {
  const toastChunks = toastChunksInitial([
    {
      shouldBeIncluded: !siteConfig.cookieConsentSettings?.analytics,
      id: 'cookieInfoDefault',
      props: {
        text: "Korzystamy z plików cookie, aby mierzyć i ulepszać Twoje doświadczenia.",
        actions: [
          {
            Component: <CookieDetails siteConfig={siteConfig} ToastChunksContext={ToastChunksContext} />
          },
          {
            Component: <AllowCookies ToastChunksContext={ToastChunksContext} />,
            type: 'remove'
          }
        ]
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
