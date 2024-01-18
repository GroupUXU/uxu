import App from 'next/app';
import { useRouter } from 'next/router';
import type { ReactElement } from "react";
import type { AppProps, AppContext } from 'next/app';
import type { SiteConfig } from 'utils';
import {CookieManager} from "utils";
import type { NormalizedCacheObject } from '@apollo/client';
import { getThemeFromRequest, getClientLocaleFromRequest, getMobilePlatformStatusFromRequest, getOSInfoFromRequest, getCookieConsentSettings, getRecIdFromRequest } from 'utils';
import { WrapperProviders } from 'design-system/providers/provider.wrapper';
import 'design-system/style/globalStyle.scss';
import '../styles/globalStyleCustom.scss';
import { useApollo, siteConfig } from "../config";

function CustomApp({ Component, pageProps, theme, clientLocale, osInfo, isMobilePlatform, recid, recidcookie }: AppProps<{ initialApolloState?: NormalizedCacheObject }> & { recid?: string | Array<string>, recidcookie?: string | Array<string> } & { theme: SiteConfig['site']['theme'], cookieConsentSettings: SiteConfig['cookieConsentSettings'], clientLocale: SiteConfig['client']['locale'], isMobilePlatform: SiteConfig['client']['platform'], osInfo: SiteConfig['client']['osInfo'] }): ReactElement {
  const config: SiteConfig = siteConfig;
  const apolloClient = useApollo(pageProps.initialApolloState || null);
  const { asPath } = useRouter();
  config.site.slug = asPath;
  config.site.canonicalUrl = `${config.site.domain}/${asPath}`;
  config.site.canonicalUrl = `${config.site.domain}/${asPath}`;
  config.site.theme = theme;
  config.client.locale = clientLocale;
  config.client.osInfo = osInfo;
  config.client.platform = isMobilePlatform;


  if(recidcookie === 'false' && recid as string){
    const cookie = new CookieManager();
    cookie.setCookie('recid', recid as string)
  }

  return (
    <main className='app'>
      <WrapperProviders apolloClient={apolloClient} siteConfig={config}>
        <Component {...pageProps} />
      </WrapperProviders>
    </main>
  );
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { ctx } = appContext;
  const theme = getThemeFromRequest(ctx);
  const cookieConsentSettings = getCookieConsentSettings(ctx);
  const clientLocale = getClientLocaleFromRequest(ctx);
  const recidData = getRecIdFromRequest(ctx);
  const isMobilePlatform = getMobilePlatformStatusFromRequest(ctx);
  const osInfo = getOSInfoFromRequest(ctx);
  return {
    ...appProps,
    ...recidData,
    theme,
    clientLocale,
    cookieConsentSettings,
    isMobilePlatform,
    osInfo,
  };
};

export default CustomApp;
