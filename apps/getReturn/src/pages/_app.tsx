import type { ReactElement } from "react";
import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';
import { useRouter } from 'next/router';
import { APOLLO_CLIENT, SITE_CONFIG } from "../config";
import { SiteConfigProps, getThemeFromRequest, getClientLocaleFromRequest, getMobilePlatformStatusFromRequest, getOSInfoFromRequest } from 'utils';
import { WrapperProviders } from 'providers';
import 'design-system/style/globalStyle.scss';
import { ToastContainer } from "design-system";

function CustomApp({ Component, pageProps, ...customProps }: AppProps & SiteConfigProps): ReactElement {
  const router = useRouter();
  return (
    <main className='app'>
      <WrapperProviders apolloClient={APOLLO_CLIENT} siteConfig={SITE_CONFIG({...router, ...customProps})}>
        <Component {...pageProps} />
        <ToastContainer />
      </WrapperProviders>
    </main>
  );
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { ctx } = appContext;
  const theme = getThemeFromRequest(ctx);
  const clientLocale = getClientLocaleFromRequest(ctx);
  const isMobilePlatform = getMobilePlatformStatusFromRequest(ctx);
  const osInfo = getOSInfoFromRequest(ctx);

  return {
    ...appProps,
    theme,
    clientLocale,
    isMobilePlatform,
    osInfo,
  };
};

export default CustomApp;
