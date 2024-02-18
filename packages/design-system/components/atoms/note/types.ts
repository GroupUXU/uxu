import type { PropsWithChildren, ReactElement } from "react";
import { InfoTyp } from 'utils';

export type NoteProps = PropsWithChildren<{
  fill?: boolean;
  disabled?: boolean;
  className?: string;
  action?: ReactElement;
  typ?: InfoTyp;
}>
