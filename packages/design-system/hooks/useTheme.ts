import { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { CookieManager, checkIsDOM } from 'utils';
import type { SiteConfig, SiteConfigProps, Site } from 'utils'; // Ensure 'Site' type is imported if it's defined in 'utils'.
import { useSiteConfig } from './config/useSiteConfig';

export function useTheme() {
  const cookieManager = useRef<CookieManager | null>(null);
  const router = useRouter();

  useEffect(() => {
    cookieManager.current = new CookieManager();
  }, []);

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

        if (!config.site) {
          console.error("config.site is undefined");
          return;
        }

        const updatedSiteConfig: Site = {
          ...config.site,
          theme: newTheme,
        };

        // Update the overall site config.
        const updatedConfig: SiteConfig = {
          ...config,
          site: updatedSiteConfig,
        };

        setConfig(updatedConfig);
      }
    },
    [currentTheme, setConfig, updateDOMTheme, cookieManager, config.site] // Dependencies for useCallback.
  );

  return { setTheme };
}
