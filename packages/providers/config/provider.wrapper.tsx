import type { PropsWithChildren, ReactElement } from 'react';
import type { SiteConfig } from "utils";
import { SEOProvider } from './provider.seo';
import { ApolloCLientProvider } from './provider.apollo';
import { SiteConfigProvider } from './provider.configSite';
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

type WrapperProvidersProps = PropsWithChildren<{ siteConfig: SiteConfig, apolloClient: ApolloClient<NormalizedCacheObject> }>;

export function WrapperProviders({ children, siteConfig, apolloClient }: WrapperProvidersProps): ReactElement {
  return (
    <SiteConfigProvider siteConfig={siteConfig}>
        <SEOProvider siteConfig={siteConfig}>
          <ApolloCLientProvider apolloClient={apolloClient}>{children}</ApolloCLientProvider>
        </SEOProvider>
    </SiteConfigProvider>
  );
}
