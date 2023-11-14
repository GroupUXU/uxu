import { CookieManager } from "utils";

export function setCookies({ ads = true, analytics = true }: { ads?: boolean, analytics?: boolean }): void {
  const cookieManager = new CookieManager();
  cookieManager.setCookie("uxu-cookieConsentSettingsAds", `${ads}`);
  cookieManager.setCookie("uxu-cookieConsentSettingsAnalytics", `${analytics}`);
}
