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
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MC3DNS7');
              `,
            }}
          />
          <meta name="google-adsense-account" content="ca-pub-4518094843351143" />
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
