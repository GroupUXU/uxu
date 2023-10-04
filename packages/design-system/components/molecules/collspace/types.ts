import type { PropsWithChildren } from "react";

export type CollapseProps = PropsWithChildren<{
  label: { title: string, bold?: boolean };
  isOpen: boolean;
  className?: string;
  onClick: () => void;
}>