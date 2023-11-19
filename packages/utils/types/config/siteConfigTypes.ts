import type { SiteIdEnums } from "../../enums";
import type { VectorBrandsVariant } from "../../../assets";


type CookieConsentSettings = Partial<{
  ads: boolean
  analytics: boolean;
}>;

export type AdSlotData = { id: number, code: string, size: { width: number, height: number }};

export type AdSlotsMap = Map<string, AdSlotData>;

export type MarketingToolsConfig = Partial<{
  googleAdManagerId?: string;
  googleTagManagerId?: string;
  adSlotsMap?: AdSlotsMap;
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
    tax?: {
      pl?: {
        krs?: string;
        nip: string;
        regon?: string;
        shareCapitalInPLN?: number;
        accountsBank?: Array<{ bank: string, iban: string }>,
      }
    },
    contact: {
      pl?: {
        email?: Array<{ type: "main", email: string }>;
        phone?: Array<{ type: "mobile", number: string }>;
      }
    }

  }
}>

export type SiteConfigContextProps = { config: SiteConfig, setConfig: ( newConfig: SiteConfig ) => void }

export type SiteConfig = {
  marketingToolsConfig: MarketingToolsConfig;
  port: number;
  projectName: string;
  site: Site;
  social: Social;
  client: Client;
  admin: Admin;
  cookieConsentSettings: CookieConsentSettings;
};
