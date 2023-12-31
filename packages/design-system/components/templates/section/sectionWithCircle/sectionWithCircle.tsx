import type {ReactElement} from "react";
import {SectionWithCircleProps} from './types';
import styles from './sectionWithCircle.module.scss';

export function SectionWithCircle({id, inCircle, header, color, children}: SectionWithCircleProps): ReactElement {

    return (
        <section className={styles.section} id={id}>
            <div className={styles.circle} style={{background: color}}>
                <div className={styles.line} style={{background: color}}/>
                {inCircle}
            </div>
            <h3
                className={styles.header}
                style={{
                    background: color,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
            >
                {header}
            </h3>
            {children}
        </section>)
}