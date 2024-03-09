import Document from "next/document";
import type { ReactElement } from "react";
import type { DocumentContext, DocumentInitialProps, DocumentProps } from "next/document";
import type { SiteConfig } from "utils";
import { RenderDocumentStructure, getThemeFromRequest } from "utils";
import { siteConfig } from "../config";


export default class CustomDocument extends Document<DocumentProps & { theme: SiteConfig['site']['theme'] }> {
  static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps & { theme: SiteConfig['site']['theme'] }> {
    const initialProps: DocumentInitialProps = await Document.getInitialProps( ctx );
    const theme: SiteConfig['site']['theme'] = getThemeFromRequest(ctx)
    return {...initialProps, theme };
  }

  render (): ReactElement {
    siteConfig.site.theme = this.props.theme;
    return (
        <RenderDocumentStructure siteConfig={siteConfig} />
    );
  }
}
