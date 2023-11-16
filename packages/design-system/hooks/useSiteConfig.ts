import { useContext } from 'react';
import type { SiteConfig } from 'utils';
import { SiteConfigContext } from '../providers/provider.configSite';

export function useSiteConfig(): { config: SiteConfig, setConfig: (newConfig: SiteConfig) => void } {
  return useContext(SiteConfigContext);
}
