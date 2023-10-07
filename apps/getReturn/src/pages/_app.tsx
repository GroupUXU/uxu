import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';
import { WrapperProviders } from '../providers';
import 'design-system/style/globalStyle.scss';

type OsInfo = {
  isWindows: boolean;
  isLinux: boolean;
  isMacOS: boolean;
}

type Environment = {
  isMobilePlatform: boolean;
  osInfo: OsInfo;
}

function CustomApp({ Component, pageProps, clientLocale, isMobilePlatform, osInfo }: AppProps & {
  clientLocale: string;
  isMobilePlatform: boolean;
  osInfo: OsInfo;
}): JSX.Element {
  return (
    <main className='app'>
      <WrapperProviders clientLocale={clientLocale} isMobilePlatform={isMobilePlatform} osInfo={osInfo}>
        <Component {...pageProps} />
      </WrapperProviders>
    </main>
  );
}

const detectEnvironment = (userAgent: string): Environment => {
  const isMobilePlatform = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
  const isWindows = /Windows NT/i.test(userAgent);
  const isLinux = /Linux/i.test(userAgent) && !/Android/i.test(userAgent);
  const isMacOS = /Mac OS X/i.test(userAgent);

  return { isMobilePlatform, osInfo: { isWindows, isLinux, isMacOS } };
};

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { ctx } = appContext;

  const clientLocale = ctx.req?.headers["accept-language"] || 'default-locale';
  const userAgent = ctx.req?.headers['user-agent'] || (typeof navigator !== 'undefined' ? navigator.userAgent : 'default-user-agent');

  const environment = detectEnvironment(userAgent);

  return { ...appProps, clientLocale, ...environment };
};

export default CustomApp;
