import type { PropsWithChildren, ReactElement } from 'react';
import type { SiteConfig, ToastChunks } from "utils";
import { ApolloCLientProvider, SiteConfigProvider, SEOProvider } from './config';
import { ProviderToastChunks, toastChunksInitial } from '../design-system/components/atoms/toast';
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

type WrapperProvidersProps = PropsWithChildren<{
  siteConfig: SiteConfig,
  apolloClient: ApolloClient<NormalizedCacheObject>
}>;

export function WrapperProviders ( {children, siteConfig, apolloClient}: WrapperProvidersProps ): ReactElement {
  return (
    <SiteConfigProvider siteConfig={siteConfig}>
      <ProviderToastChunks toastChunksInitial={toastChunksInitial({ siteConfig })}>
        <SEOProvider siteConfig={siteConfig}>
          <ApolloCLientProvider apolloClient={apolloClient}>{children}</ApolloCLientProvider>
        </SEOProvider>
      </ProviderToastChunks>
    </SiteConfigProvider>
  );
}
