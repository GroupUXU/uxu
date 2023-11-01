import { ToastChunks, SiteConfig } from "utils";
import { allowCookies } from './allowCookies';

export function toastChunksInitial ({ siteConfig }: { siteConfig: SiteConfig }): ToastChunks {
  if (!siteConfig.cookieConsentSettings?.analytics) {
   return [{
      id: 'cookieInfoDefault',
      props: {
        text: "Korzystamy z plików cookie, aby mierzyć i ulepszać Twoje doświadczenia.",
        actions: [
          {
            Component: (
              <button className="btn secondary" style={{marginRight: "var(--uxu-space-default)" }}>Szczegóły</button>
            )
          },
          {
            Component: (
              <button
                className="btn primary"
                onClick={() => {
                  allowCookies ()
                }}
              >
                Akceptuj
              </button>
            ),
            type: 'remove'
          }
        ]
      }
    }]
  }
  return []
}