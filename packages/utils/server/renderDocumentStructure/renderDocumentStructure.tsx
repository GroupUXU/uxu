import type {ReactElement} from "react";
import {SiteConfig} from "../../types";
import {Html, Main, NextScript} from "next/document";
import {Head} from "next/document";

export type RenderDocumentStructureProps = { siteConfig: SiteConfig };

export function RenderDocumentStructure({siteConfig}: RenderDocumentStructureProps): ReactElement {
    return (
        <Html data-theme={siteConfig.site.theme} lang={siteConfig.site.locale}>
            <Head>
                <meta name="theme-color" content="#000000"/>
                <link rel="manifest" href="/manifest.json"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
