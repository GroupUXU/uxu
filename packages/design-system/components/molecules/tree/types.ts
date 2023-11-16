import type { SetStateAction, Dispatch, PropsWithChildren } from "react";

export type TreeProps = PropsWithChildren<{
  full?: boolean;
  activeHref: string;
}>

export type ITreeContext = {
  full: boolean;
  activeHref: string;
  activeBranch: string | null;
  setActiveBranch: Dispatch<SetStateAction<string | null>>;
}

export type BranchProps = PropsWithChildren<{
  title: string;
  href: string;
  active?: boolean;
  branches?: Array<BranchProps>;
}>
