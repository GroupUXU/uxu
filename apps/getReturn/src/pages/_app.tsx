import App from 'next/app';
import { useRouter } from 'next/router';
import type { ReactElement } from "react";
import type { AppProps, AppContext } from 'next/app';
import {
  getThemeFromRequest,
  getClientLocaleFromRequest,
  getMobilePlatformStatusFromRequest,
  getOSInfoFromRequest,
  getCookieConsentSettings
} from 'utils';
import type { SiteConfigProps } from 'utils';
import { WrapperProviders } from 'design-system/providers/provider.wrapper';
import 'design-system/style/globalStyle.scss';
import { APOLLO_CLIENT, SITE_CONFIG } from "../config";


function CustomApp({ Component, pageProps, ...customProps }: AppProps & SiteConfigProps): ReactElement {
  const router = useRouter();
  return (
    <main className='app'>
      <WrapperProviders apolloClient={APOLLO_CLIENT} siteConfig={SITE_CONFIG({...router, ...customProps})}>
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
    cookieConsentSettings,
    clientLocale,
    isMobilePlatform,
    osInfo,
  };
};

export default CustomApp;
