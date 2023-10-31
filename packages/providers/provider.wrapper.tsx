import type { PropsWithChildren, ReactElement } from 'react';
import type { SiteConfig } from "utils";
import { ApolloCLientProvider, SiteConfigProvider, SEOProvider } from './config';
import { ProviderToastChunks } from './components';
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

type WrapperProvidersProps = PropsWithChildren<{
  siteConfig: SiteConfig,
  apolloClient: ApolloClient<NormalizedCacheObject>
}>;

export function WrapperProviders ( {children, siteConfig, apolloClient}: WrapperProvidersProps ): ReactElement {
  return (
    <SiteConfigProvider siteConfig={siteConfig}>
      <ProviderToastChunks toastChunksInitial={[]}>
        <SEOProvider siteConfig={siteConfig}>
          <ApolloCLientProvider apolloClient={apolloClient}>{children}</ApolloCLientProvider>
        </SEOProvider>
      </ProviderToastChunks>
    </SiteConfigProvider>
  );
}
