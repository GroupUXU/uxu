import type { ReactElement } from "react";

export function GoogleTagManagerBody ( {googleTagManagerId}: { googleTagManagerId: string } ): ReactElement {
  return (
    <noscript>
      <iframe
        height="0"
        src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
        style={{display: 'none', visibility: 'hidden'}}
        title="Google Tag Manager No Script"
        width="0"
      />
    </noscript>
  )
};
