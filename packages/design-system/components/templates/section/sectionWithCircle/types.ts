import type { PropsWithChildren } from "react";

export type SectionWithCircleProps = PropsWithChildren<{
    id: string;
    inCircle: string;
    header: string;
    color: string;
}>;