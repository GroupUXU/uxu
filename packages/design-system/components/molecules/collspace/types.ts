import type { PropsWithChildren, ReactElement } from "react";

export type CollapseProps = PropsWithChildren<{
  id: string;
  title: ReactElement;
  isOpen?: boolean;
  className?: string;
  notifyCollapseStateChange?: (isOpen: boolean, id: string | number) => void;
}>