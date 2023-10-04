import type { InputHTMLAttributes, ReactElement, CSSProperties } from 'react';
import type { RegisterOptions } from 'react-hook-form';

export type InputRadioIconProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  style?: CSSProperties;
  icon: ReactElement;
  errorMessage?: string;
  registerOptions?: RegisterOptions;
}
