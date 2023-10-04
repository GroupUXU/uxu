import { useContext } from 'react';
import type { SiteConfigTypes } from '../utils';
import { SiteConfigContext } from '../providers';

export function useSiteConfig(): SiteConfigTypes {
  return useContext(SiteConfigContext);
}
