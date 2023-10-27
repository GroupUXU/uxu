import type { PropsWithChildren, ReactElement } from 'react';
import { SiteConfigProvider } from 'providers';
import { SITE_CONFIG } from '../config';
import { SEOProvider } from './provider.seo';
import { ApolloCLientProvider } from './provider.apollo';

type Props = PropsWithChildren<{
  clientLocale: string;
  isMobilePlatform: boolean;
  osInfo: { isWindows: boolean, isLinux: boolean, isMacOS: boolean };
}>;


export function WrapperProviders({ children, clientLocale, isMobilePlatform, osInfo }: Props): ReactElement {
  return (
    <SiteConfigProvider SITE_CONFIG={SITE_CONFIG} clientLocale={clientLocale} isMobilePlatform={isMobilePlatform} osInfo={osInfo}>
        <SEOProvider>
          <ApolloCLientProvider>{children}</ApolloCLientProvider>
        </SEOProvider>
    </SiteConfigProvider>
  );
}
