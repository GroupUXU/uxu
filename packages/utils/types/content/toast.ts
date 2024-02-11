import type { ReactElement, Dispatch } from "react";

export type ToastProps = {
  id: number | string;
  text?: string;
  className?: string;
  visual?: ReactElement;
  actions?: Array<ActionItem>;
  type?: 'default' | 'danger' | 'warning' | 'success';
  toastChunkDispatch: Dispatch<ToastChunkAction>
}

export type ToastChunk = { id: number | string; props?: Omit<ToastProps, 'id' | 'toastChunkDispatch'>; delay?: number };
export type ToastChunks = Array<ToastChunk>;

export type ToastChunkAction =
  | { type: 'ADD_TOAST', payload: ToastChunk }
  | { type: 'REMOVE_TOAST', payload: { id: number | string; } };

type ActionItem = {
  type?: 'remove';
  Component: ReactElement;
}