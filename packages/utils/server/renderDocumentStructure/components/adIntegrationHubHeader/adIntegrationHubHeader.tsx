import type { ReactElement } from "react";
import { Head } from "next/document";
import { GoogleAdManagerHead, GoogleTagManagerHead, GoogleTagManagerBody } from "./components";
import type { AdHeaderCreatorProps } from "./types";

export function AdIntegrationHubHeader ( { children, googleTagManagerId, googleAdManagerId }: AdHeaderCreatorProps ): ReactElement {
  const isGoogleTagManagerId: boolean = typeof googleTagManagerId === "string";
  const isGoogleAdManagerId: boolean = typeof googleAdManagerId === "string";

  return (
    <>
      <Head>
        {isGoogleTagManagerId && <GoogleTagManagerHead googleTagManagerId={googleTagManagerId || ""}/>}
        {isGoogleAdManagerId && <GoogleAdManagerHead/>}
      </Head>
      <body>
      {isGoogleTagManagerId && <GoogleTagManagerBody googleTagManagerId={googleTagManagerId || ""}/>}
      {children}
      </body>
    </>
  );
}
