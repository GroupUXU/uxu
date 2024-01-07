import type { PropsWithChildren, MouseEventHandler, CSSProperties } from "react";

export type LinkProps = PropsWithChildren<{
  href: string;
  title: string;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}>;
