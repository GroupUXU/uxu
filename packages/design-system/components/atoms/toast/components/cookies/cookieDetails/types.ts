import type { SiteConfig, ToastChunkAction, ToastChunks } from "utils";
import type { Context, Dispatch } from "react";

export type CookieDetailsProps = {
  siteConfig: SiteConfig;
  ToastChunksContext: Context<{ toastChunks: ToastChunks, toastChunkDispatch: Dispatch<ToastChunkAction> }>;
}