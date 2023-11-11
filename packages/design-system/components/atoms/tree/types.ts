import type { ReactNode, SetStateAction, Dispatch } from "react";

export type TreeProps = {
  full?: boolean;
  activeHref: string;
  children: ReactNode;
}

export type ITreeContext = {
  full: boolean;
  activeHref: string;
  activeBranch: string | null;
  setActiveBranch: Dispatch<SetStateAction<string | null>>;
}

export type BranchProps = {
  title: string;
  children?: ReactNode;
  href: string;
  active?: boolean;
  branches?: Array<BranchProps>;
}
