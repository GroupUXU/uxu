import {ReactNode} from "react";

export type KeyType = string | null;

export type CollapseProps = {
    defaultActiveKey?: string;
    children: ReactNode;
    className?: string;
    accordion?: boolean;
};

export type CollapsePanelProps = {
    header: string;
    key: string;
    isActive: boolean;
    onClick: () => void;
    children: ReactNode;
    type?: 'default';
    classNameWrapper?: string;
    classNameHeader?: string;
    classNameContent?: string;
};

export type ClonedPanelProps = {
    isActive: boolean;
    onClick: () => void;
} & CollapsePanelProps