import type {CSSProperties, PropsWithChildren, ReactElement} from "react";
import { Status } from 'utils';

export type NoteProps = PropsWithChildren<{
  fill?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
  className?: string;
  action?: ReactElement | null;
  typ: Status;
}>
