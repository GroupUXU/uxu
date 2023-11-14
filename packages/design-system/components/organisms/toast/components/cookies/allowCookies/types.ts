import type { ToastChunkAction, ToastChunks } from "utils";
import type { Context, Dispatch } from "react";

export type AllowCookiesProps = {
  ToastChunksContext: Context<{ toastChunks: ToastChunks, toastChunkDispatch: Dispatch<ToastChunkAction> }>;
}