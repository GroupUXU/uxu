import {ReactElement, ReactNode} from "react";

export type KeyType = string | null;

export type CollapseProps = {
    defaultActiveKey?: KeyType;
    children: ReactNode;
    className?: string;
    accordion?: boolean;
};

export type PanelProps = {
    header: ReactElement | string;
    key: KeyType;
    isActive?: boolean;
    onClick?: () => void;
    children: ReactNode;
    type?: 'default';
    classNameWrapper?: string;
    classNameHeader?: string;
    classNameContent?: string;
};

export type ClonedProps = {
    isActive: boolean;
    onClick: () => void;
} & PanelProps