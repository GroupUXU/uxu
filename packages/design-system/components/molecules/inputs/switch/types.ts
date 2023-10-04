import type { CSSProperties, InputHTMLAttributes } from 'react';
import type { RegisterOptions } from 'react-hook-form';

export type InputSwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  style?: CSSProperties;
  errorMessage?: string;
  registerOptions?: RegisterOptions;
}
