import type { ReactElement } from "react";
import classnames from "classnames";
import type { ColorShiftTextAnimatorProps } from "./types";
import styles from './colorShiftTextAnimator.module.scss';


export function ColorShiftTextAnimator({ headerTagHtml: HeaderTagHtml = 'h1', header, description, className}: ColorShiftTextAnimatorProps): ReactElement {
    return (
        <div className={classnames(styles.wrapper, className)}>
            <HeaderTagHtml className={styles.header}>
                {header.map(item => (
                    <span data-text={item} key={item}>
                        {item}
                    </span>
                ))}
            </HeaderTagHtml>
            {description ? <p>{description}</p> : null}
        </div>
    )
}