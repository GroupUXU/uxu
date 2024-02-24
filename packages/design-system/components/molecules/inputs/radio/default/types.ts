import type { InputHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import type {Status} from "utils";

export type InputRadioDefautProps = InputHTMLAttributes<HTMLInputElement> & PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
  errorMessage?: string;
  fill?: boolean;
  typ?: Status;
  registerOptions?: RegisterOptions;
}>
