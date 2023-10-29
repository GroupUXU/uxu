import { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { CookieManager, checkIsDOM } from 'utils';
import type { SiteConfig, SiteConfigProps } from 'utils';
import { useSiteConfig } from './config/useSiteConfig';

export function useTheme() {
  const cookieManager = useRef<CookieManager | null>(null);

const router = useRouter();
  useEffect ( () => {
    cookieManager.current = new CookieManager();
  }, [] );

  const { config, setConfig } = useSiteConfig();
  const currentTheme = config.site?.theme || 'dark';

  const updateDOMTheme = useCallback((theme) => {
    checkIsDOM(() => {
      const htmlEl = document.documentElement;
      if (htmlEl) {
        htmlEl.setAttribute('data-theme', theme);
      }
    });
  }, []);

  const setTheme = useCallback(
    (newTheme: SiteConfigProps['theme']) => {
      if (currentTheme !== newTheme) {

        cookieManager.current?.setCookie('theme', newTheme);


        updateDOMTheme(newTheme);


        const updatedSiteConfig: SiteConfig['site'] = {
          ...config.site,
          theme: newTheme,
        };

        const updatedConfig: SiteConfig = {
          ...config,
          site: updatedSiteConfig,
        };

        setConfig(updatedConfig);
      }
    },
    [currentTheme, setConfig, updateDOMTheme, cookieManager]
  );

  return { setTheme };
}
