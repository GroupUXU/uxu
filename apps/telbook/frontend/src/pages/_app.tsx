import App from 'next/app';
import {useRouter} from 'next/router';
import type {ReactElement} from "react";
import type {AppProps, AppContext} from 'next/app';
import type {SiteConfig} from 'utils';
import type {NormalizedCacheObject} from '@apollo/client';
import {
  getThemeFromRequest,
  getClientLocaleFromRequest,
  getMobilePlatformStatusFromRequest,
  getOSInfoFromRequest,
  getCookieConsentSettings,
  GoogleTagManagerHead,
  GoogleTagManagerBody,
  GoogleAdManagerHead
} from 'utils';
import {WrapperProviders} from 'design-system/providers/provider.wrapper';
import 'design-system/style/globalStyle.scss';
import {useApollo, siteConfig} from "../config";

function CustomApp({Component, pageProps, theme, clientLocale, osInfo, isMobilePlatform, cookieConsentSettings}: AppProps<{ initialApolloState?: NormalizedCacheObject }> & {
  theme: SiteConfig['site']['theme'],
  cookieConsentSettings: SiteConfig['cookieConsentSettings'],
  clientLocale: SiteConfig['client']['locale'],
  isMobilePlatform: SiteConfig['client']['platform'],
  osInfo: SiteConfig['client']['osInfo']
}): ReactElement {
  const config: SiteConfig = siteConfig;
  const apolloClient = useApollo(pageProps.initialApolloState || null);
  const {asPath} = useRouter();
  config.site.slug = asPath;
  config.site.canonicalUrl = `${config.site.domain}${asPath}`;
  config.site.theme = theme;
  config.client.locale = clientLocale;
  config.client.osInfo = osInfo;
  config.client.platform = isMobilePlatform;
  config.cookieConsentSettings = cookieConsentSettings;


  return (
      <main className='app'>
        <WrapperProviders apolloClient={apolloClient} siteConfig={config}>
          <GoogleTagManagerHead googleTagManagerId={config.marketingToolsConfig.googleTagManagerId} />
          <GoogleTagManagerBody googleTagManagerId={config.marketingToolsConfig.googleTagManagerId} />
          <GoogleAdManagerHead />
          <Component {...pageProps} />
        </WrapperProviders>
      </main>
  );
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const {ctx} = appContext;
  const theme = getThemeFromRequest(ctx);
  const cookieConsentSettings = getCookieConsentSettings(ctx);
  const clientLocale = getClientLocaleFromRequest(ctx);
  const isMobilePlatform = getMobilePlatformStatusFromRequest(ctx);
  const osInfo = getOSInfoFromRequest(ctx);

  return {
    ...appProps,
    theme,
    clientLocale,
    cookieConsentSettings,
    isMobilePlatform,
    osInfo,
  };
};

export default CustomApp;
