import type { ReactElement, Dispatch } from "react";

export type ToastProps = {
  id: number;
  text?: string;
  className?: string;
  visual?: ReactElement;
  actions?: Array<ActionItem>;
  type?: 'default' | 'danger' | 'warning' | 'success';
  toastChunkDispatch: Dispatch<ToastChunkAction>
}

export type ToastChunk = { id: number; props?: Omit<ToastProps, 'id' | 'toastChunkDispatch'>; delay?: number };
export type ToastChunks = Array<ToastChunk>;

export type ToastChunkAction =
  | { type: 'ADD_TOAST', payload: ToastChunk }
  | { type: 'REMOVE_TOAST', payload: { id: number } };

type ActionItem = {
  type?: 'remove';
  Component: ReactElement;
}