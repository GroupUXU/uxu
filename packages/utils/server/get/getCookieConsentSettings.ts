import type { NextPageContext } from 'next';
import type { DocumentContext } from "next/document";

export type CookieConsentSettings = {
  ads: boolean;
  analytics: boolean;
};

export function getCookieConsentSettings(ctx: NextPageContext | DocumentContext): CookieConsentSettings {
  let cookieConsentSettingsAds = false;
  let cookieConsentSettingsAnalytics = false;

  const cookieString = ctx.req?.headers.cookie;

  if (cookieString) {
    const cookies = cookieString.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);

    cookieConsentSettingsAds = cookies['uxu-cookieConsentSettingsAds'] === 'true';
    cookieConsentSettingsAnalytics = cookies['uxu-cookieConsentSettingsAnalytics'] === 'true';
  }

  return {
    ads: cookieConsentSettingsAds,
    analytics: cookieConsentSettingsAnalytics,
  };
}
