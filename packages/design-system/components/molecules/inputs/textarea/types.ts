import type { CSSProperties, InputHTMLAttributes } from 'react';
import type { RegisterOptions } from 'react-hook-form';

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  style?: CSSProperties;
  errorMessage?: string;
  registerOptions?: RegisterOptions;
}

