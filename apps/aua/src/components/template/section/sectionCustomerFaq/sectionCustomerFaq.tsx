import styles from './sectionCustomerFaq.module.scss';
import { Collapse, Panel } from 'design-system/components/molecules/collspace';
import type { SectionCustomerFaqProps } from "./types";

export function SectionCustomerFaq({ header, description, collapse }: SectionCustomerFaqProps) {

    return (
        <div className={styles.wrapper}>
            <strong className={styles.header}>{header}</strong>
            <p className={styles.description}>{description}</p>
            <span className={styles.headerFaq}>Częste pytania klientów na tym etapie :</span>
            <div style={{paddingTop: "3rem"}}>
                <Collapse accordion>
                    {collapse.map(({header: collapseHeader, description: collapseDescription }) => {
                        return (
                            <Panel key={collapseHeader} header={collapseHeader} type="default">
                                <p>{collapseDescription}</p>
                            </Panel>
                        )
                    })}
                </Collapse>
            </div>
        </div>
    )
}