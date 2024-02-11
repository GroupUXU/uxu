import type { ReactElement } from "react";
import { SiteConfig } from "../../types";
import { Html, Main, NextScript } from "next/document";
import { AdIntegrationHubHeader } from './components';

export type RenderDocumentStructureProps = { siteConfig: SiteConfig };

export function RenderDocumentStructure ({ siteConfig }: RenderDocumentStructureProps ): ReactElement {
const { googleTagManagerId, googleAdManagerId } = siteConfig.marketingToolsConfig;

  return (
    <Html data-theme={siteConfig.site.theme}>
      <AdIntegrationHubHeader
        googleTagManagerId={googleTagManagerId}
        googleAdManagerId={googleAdManagerId}
        siteDomain={siteConfig.site.domain}
      >
        <Main/>
        <NextScript/>
      </AdIntegrationHubHeader>
    </Html>
  );
}
