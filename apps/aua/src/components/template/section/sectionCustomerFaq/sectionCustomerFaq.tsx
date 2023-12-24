import styles from './sectionCustomerFaq.module.scss';
import { Collapse, Panel } from 'design-system/components/molecules/collspace'

export function SectionCustomerFaq() {

    return (
        <div className={styles.wrapper}>
            <strong className={styles.header}>Analiza umowy pod kątem sankcji
                darmowego kredytu</strong>
            <p className={styles.description}>Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia
                zwrot odsetek z umowy kredytowej. Nasz proces analizy polega na bezpłatnym
                badaniu, dokonywanym przez prawników w ciągu 72 godzin, przesłanej umowy
                kredytowej, aby ustalić, czy przysługuje Ci zwrot
                w ramach sankcji darmowego kredytu.</p>
            <span className={styles.headerFaq}>Częste pytania klientów na tym etapie :</span>
            <div style={{paddingTop: "3rem"}}>
                <Collapse accordion>
                    <Panel key="1" header="Panel 1" type="default">
                        <p>Treść Panelu 1</p>
                    </Panel>
                    <Panel key="2" header="Panel 2" type="default">
                        <p>Treść Panelu 2</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}