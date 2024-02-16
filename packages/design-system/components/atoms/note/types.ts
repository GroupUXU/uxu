import type { PropsWithChildren, ReactElement } from "react";


export type NoteType = 'success' | 'error' | 'warning' | 'default';

export type NoteProps = PropsWithChildren<{
  fill?: boolean;
  disabled?: boolean;
  className?: string;
  action?: ReactElement;
  type?: NoteType;
}>
