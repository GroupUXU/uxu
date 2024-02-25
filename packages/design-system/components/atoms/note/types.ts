import type { PropsWithChildren, ReactElement } from "react";
import { Status } from 'utils';

export type NoteProps = PropsWithChildren<{
  fill?: boolean;
  disabled?: boolean;
  className?: string;
  action?: ReactElement | null;
  typ?: Status;
}>
