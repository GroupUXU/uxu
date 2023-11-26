import type { PropsWithChildren } from "react";
import { MarketingToolsConfig } from "../../../../types";

export type AdHeaderCreatorProps  = PropsWithChildren<Partial<{ siteDomain: string; }> & MarketingToolsConfig>