import {useState, Children, isValidElement, cloneElement} from 'react';
import type { ReactElement } from 'react';
import type { CollapseProps, ClonedPanelProps, KeyType, CollapsePanelProps} from "./types";
import styles from './collapse.module.scss';
import classnames from "classnames";

export function Collapse({ defaultActiveKey, accordion, className, children }: CollapseProps): ReactElement {
    const [activeKey, setActiveKey] = useState<KeyType | KeyType[]>(() => defaultActiveKey || (accordion ? null : []));

    function toggle(key: string): void {
        if (accordion) {
            setActiveKey(activeKey === key ? null : key);
        } else {
            setActiveKey(prevKeys => {
                if (Array.isArray(prevKeys)) {
                    if (prevKeys.includes(key)) {
                        return prevKeys.filter(k => k !== key);
                    } else {
                        return [...prevKeys, key];
                    }
                }
                return [key];
            });
        }
    };


    return (
        <div className={classnames(styles.wrapper, className)}>
            {Children.map(children, child => {
                if (!isValidElement(child) || child.key === null) return null;
                const childKey: string = child.key.toString();
                const isActive = accordion ? activeKey === childKey : Array.isArray(activeKey) && activeKey.includes(childKey);

                const clonedProps: ClonedPanelProps = {
                    ...child.props as CollapsePanelProps,
                    isActive,
                    onClick: () => {
                        toggle(childKey)
                    }
                };

                return cloneElement(child, clonedProps);
            })}
        </div>
    );
};