import Document, { Head, Html, Main, NextScript } from "next/document";
import type { DocumentContext, DocumentInitialProps } from "next/document";
import Script from 'next/script';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <Script
            async
            src="https://www.googletagmanager.com/gtm.js?id=GTM-MC3DNS7"
            strategy="afterInteractive"
          />
        </Head>
        <body>
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-MC3DNS7"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager No Script"
            width="0"
          />
        </noscript>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
