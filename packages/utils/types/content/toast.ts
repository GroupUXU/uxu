import { ReactElement } from "react";

export type ToastProps = {
  id: number;
  text?: string;
  type?: 'default' | 'danger' | 'warning' | 'success'
  className?: string;
  visual?: ReactElement;
  actions?: Array<ActionItem>;
}

export type ToastChunk = { id: number; props?: Omit<ToastProps, 'id' | 'remove'>; delay?: number };
export type ToastChunks = Array<ToastChunk>;

export type ToastChunkAction =
  | { type: 'ADD_TOAST', payload: ToastChunk }
  | { type: 'REMOVE_TOAST', payload: { id: number } };

type ActionItem = {
  type?: 'remove';
  Component: ReactElement;
}