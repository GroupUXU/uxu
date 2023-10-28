import type { ReactElement } from "react";
import Document from "next/document";
import type { DocumentContext, DocumentInitialProps, DocumentProps } from "next/document";
import type { RenderDocumentStructureProps } from "utils";
import { RenderDocumentStructure, getThemeFromRequest } from "utils";

export default class CustomDocument extends Document<DocumentProps & RenderDocumentStructureProps> {
  static async getInitialProps ( ctx: DocumentContext ): Promise<DocumentInitialProps & RenderDocumentStructureProps> {
    const initialProps: DocumentInitialProps = await Document.getInitialProps( ctx );
    let theme = getThemeFromRequest(ctx)
    return {...initialProps, theme};
  }

  render (): ReactElement {
    return (
      <RenderDocumentStructure {...this.props} />
    );
  }
}
