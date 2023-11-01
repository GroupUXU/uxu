import { CookieManager } from "utils";

export function allowCookies(): void {
  const cookieManager = new CookieManager();

  cookieManager.setCookie("uxu-cookieConsentSettingsAds", "true");
  cookieManager.setCookie("uxu-cookieConsentSettingsAnalytics", "true");

}
