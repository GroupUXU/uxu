import type { PropsWithChildren, ReactElement } from "react";


export type PropsNote = PropsWithChildren<{
  fill?: boolean;
  disabled?: boolean;
  className?: string;
  action?: ReactElement;
  type?: 'success' | 'error' | 'warning' | 'default' ;
}>
