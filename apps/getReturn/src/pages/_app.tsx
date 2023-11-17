import App from 'next/app';
import { useRouter } from 'next/router';
import type { ReactElement } from "react";
import type { AppProps, AppContext } from 'next/app';
import type { NormalizedCacheObject } from '@apollo/client';
import { getThemeFromRequest, getClientLocaleFromRequest, getMobilePlatformStatusFromRequest, getOSInfoFromRequest, getCookieConsentSettings } from 'utils';
import type { SiteConfigProps } from 'utils';
import { WrapperProviders } from 'design-system/providers/provider.wrapper';
import 'design-system/style/globalStyle.scss';
import { useApollo, SITE_CONFIG } from "../config";


function CustomApp({ Component, pageProps, ...customProps }: AppProps<{ initialApolloState?: NormalizedCacheObject }> & SiteConfigProps): ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState || null);
  const router = useRouter();
  return (
    <main className='app'>
      <WrapperProviders apolloClient={apolloClient} siteConfig={SITE_CONFIG({...router, ...customProps})}>
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
