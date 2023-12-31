import { useCallback, useEffect, useRef } from 'react';
import { CookieManager, checkIsDOM } from 'utils';
import type { SiteConfig, Site } from 'utils'; // Ensure 'Site' type is imported if it's defined in 'utils'.
import { useSiteConfig } from './useSiteConfig';

export function useTheme(): { setTheme: (newTheme: SiteConfig['site']['theme']) => void } {
  const cookieManager = useRef<CookieManager | null>(null);

  useEffect(() => {
    cookieManager.current = new CookieManager();
  }, []);

  const { config, setConfig } = useSiteConfig();
  const currentTheme: "dark" | "light" = config.site.theme;

  const updateDOMTheme = useCallback((theme: "dark" | "light"): void => {
    checkIsDOM((): void => {
      const htmlEl = document.documentElement;
      htmlEl.setAttribute('data-theme', theme);
    });
  }, []);

  const setTheme = useCallback(
    (newTheme: SiteConfig['site']['theme']): void => {
      if (currentTheme !== newTheme) {
        cookieManager.current?.setCookie('theme', newTheme);
        updateDOMTheme(newTheme);

        const updatedSiteConfig: Site = {
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
    [currentTheme, setConfig, updateDOMTheme, cookieManager, config]
  );

  return { setTheme };
}
