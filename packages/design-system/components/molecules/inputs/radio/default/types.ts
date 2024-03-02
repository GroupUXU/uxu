import type { InputHTMLAttributes, CSSProperties } from 'react';
import type { RegisterOptions } from 'react-hook-form';

export type InputRadioDefautProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  value: string;
  className?: string;
  style?: CSSProperties;
  errorMessage?: string;
  registerOptions?: RegisterOptions;
}
