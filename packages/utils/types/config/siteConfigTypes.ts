import type { NextRouter } from "next/router";
import type { SiteIdEnums } from "../../enums";
import type { VectorBrandsVariant } from "../../../assets";

type Ads = Partial<{
  enabled: boolean;
}>;

type CookieConsentSettings = Partial<{
  ads: boolean
  analytics: boolean;
}>;

type Analytics = Partial<{
  gtmId: string | string[];
  hotjarId: string;
}>;

type Facebook = Partial<{
  oAuth: boolean;
  appId: string;
  clientToken: string;
  pageId: string;
  admins: string[];
  pixelId: string;
  accountName: string;
}>;

type Google = Partial<{
  oAuth: boolean;
  clientId: string;
}>;

type Twitter = Partial<{
  accountName: string;
}>;

type Instagram = Partial<{
  accountName: string;
}>;

type Youtube = Partial<{
  channelId: string;
}>;

type GitHub = Partial<{
  accountName: string;
}>;

type TikTok = Partial<{
  accountName: string;
}>;

export type Social = Partial<{
  facebook: Facebook;
  google: Google;
  twitter: Twitter;
  instagram: Instagram;
  youtube: Youtube;
  github: GitHub;
  tiktok: TikTok;
}>;

type Graphql = Partial<{
  productId: SiteIdEnums;
  url: string;
}>;

export type Site = {
  id: SiteIdEnums;
  locale: string,
  shortname: string;
  domain: string;
  slug: string;
  canonicalUrl: string;
  title: string;
  description: string;
  defaultCover: string;
  authEnabled: boolean;
  switchTheme: boolean;
  brand: VectorBrandsVariant;
  shortBrand: VectorBrandsVariant;
  theme: 'dark' | 'light';
  images: Array<{ url: string }>
};

type Client = {
  locale: string,
    platform: {
    isMobile: boolean;
    isDesktop: boolean;
  }
  osInfo: {
    isWindows: boolean;
    isLinux: boolean;
    isMacOS: boolean;
  }
}

type Admin = Partial<{
  company: {
    name: string;
    street: string;
    postCode: string;
    city: string;
    email: string;
  }
}>

export type SiteConfigProps = {
  theme: Site['theme']
  clientLocale: string,
  isMobilePlatform: boolean,
  router: NextRouter,
  osInfo: Client['osInfo'],
  cookieConsentSettings: CookieConsentSettings
}

export type SiteConfigContextProps = { config: SiteConfig, setConfig: (newConfig: SiteConfig) => void }

export type SiteConfig = Partial<{
  ads: Ads;
  analytics: Analytics;
  graphql: Graphql;
  port: number;
  projectName: string;
  site: Site;
  social: Social;
  client: Client;
  admin: Admin;
  cookieConsentSettings: CookieConsentSettings;
}>;
