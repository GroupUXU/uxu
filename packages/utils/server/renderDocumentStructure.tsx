import type { ReactElement } from "react";
import { SiteConfigProps } from "../types";
import { Html, Head, Main, NextScript } from "next/document";

export type RenderDocumentStructureProps = {
  theme: SiteConfigProps['theme']
};

export function RenderDocumentStructure({ theme }: RenderDocumentStructureProps): ReactElement {



  return (
    <Html data-theme={theme}>
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
        <meta name="google-adsense-account" content="ca-pub-4518094843351143"/>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
        <script dangerouslySetInnerHTML={{
         __html: `
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/23023978625/2525', [250, 250], 'div-gpt-ad-1700304626809-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
         `,
        }}/>
      </Head>
      <body>
      <noscript>
        <iframe
          height="0"
          src="https://www.googletagmanager.com/ns.html?id=GTM-MC3DNS7"
          style={{display: 'none', visibility: 'hidden'}}
          title="Google Tag Manager No Script"
          width="0"
        />
      </noscript>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
