import type { ReactNode } from "react";

export type PressCoverageLinksType = Array<{ logoSvg: ReactNode, url: string, companyName: string }>

export type PressCoverageLinksProps = {
    coverageLinks: PressCoverageLinksType
}