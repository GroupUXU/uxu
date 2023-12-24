import {useEffect, useRef} from "react";
import type {ReactElement} from "react";
import {ChevronRight} from 'react-feather';
import classnames from "classnames";
import {PanelProps} from "../../types";
import styles from './panel.module.scss';

export function Panel({header, isActive, onClick, children, type, classNameWrapper, classNameHeader, classNameContent}: PanelProps): ReactElement {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect((): void => {
        if (contentRef.current) contentRef.current.style.maxHeight = isActive ? `${contentRef.current.scrollHeight}px` : '0';
    }, [isActive, contentRef]);

    const wrapperClass = classnames(
        styles.wrapper,
        classNameWrapper,
        {
            [styles.default]: type === 'default',
            [styles.active]: isActive
        }
    );

    const headerClass = classnames(
        styles.header,
        classNameHeader,
        {
            [styles.default]: type === 'default',
            [styles.active]: isActive
        }
    );

    const contentClass = classnames(
        styles.content,
        classNameContent,
        {
            [styles.default]: type === 'default',
            [styles.active]: isActive
        }
    );

    return (
        <div className={wrapperClass}>
            <button className={headerClass} onClick={onClick}>
                {header}
                <ChevronRight className={styles.arrow} style={{transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)'}}/>
            </button>
            <div className={contentClass} ref={contentRef}>
                {children}
            </div>
        </div>
    );
};
