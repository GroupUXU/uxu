import {useContext, useState} from "react";
import type {ReactElement} from 'react';
import {X} from 'react-feather';
import {Modal} from "../../../../../atoms/modal";
import {Collapse, Panel} from "../../../../../molecules/collspace";
import {setCookies} from "../../../utils/setCookies";
import type {CookieDetailsProps} from "./types";
import styles from './cookieDetails.module.scss';

export function CookieDetails({siteConfig, ToastChunksContext}: CookieDetailsProps): ReactElement {
    const {toastChunkDispatch} = useContext(ToastChunksContext);
    const [open, setOpen] = useState(false);

    function closeModal(): void {
        setOpen(false);
    };

    function acceptCookies(): void {
        toastChunkDispatch({type: "REMOVE_TOAST", payload: {id: "cookieInfoDefault"}});
        setCookies({});
        closeModal();
    };

    return (
        <>
            <button
                className="btn secondary"
                onClick={() => {
                    setOpen(true)
                }}
                style={{marginRight: "var(--uxu-space-default)"}}
                type="button"
            >
                Szczegóły
            </button>
            <Modal
                className={styles.modalContainer}
                onClose={closeModal}
                open={open}
                renderDirectlyInBody
            >
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <strong>Preferencje plików cookie</strong>
                        <button onClick={closeModal} type="button">
                            <X size={30}/>
                        </button>
                    </div>
                    <div className={styles.modalContent}>
                        <p>Używamy plików cookie, aby poprawić komfort korzystania z witryny. Do
                            działania {siteConfig.projectName} wymagane są pliki cookie.</p>
                        <Collapse className={styles.collapse} accordion>
                            <Panel key={'cookie'} header="Pliki cookie niezbędne do działania strony" type="default" classNameWrapper={styles.panel} >
                                <p>Pliki cookie niezbędne do działania strony umożliwiają zapamiętanie Twoich preferencji, takich jak akceptacja cookies czy wybór stylu. Są kluczowe dla prawidłowego i spersonalizowanego funkcjonowania witryny.</p>
                            </Panel>
                            <Panel key={'analityc'} header="Analiza/Analityka" type="default" classNameWrapper={styles.panel}>
                                <p>Używamy plików cookie do zbierania danych o tym, jak korzystasz z naszej strony. Pomaga nam to w optymalizacji treści, zrozumieniu preferencji użytkowników i ulepszaniu funkcjonalności. Twoja prywatność jest dla nas ważna, a dane są anonimowe.</p>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className={styles.modalFooter}>
                        <button className="btn primary" onClick={acceptCookies} type="button">
                            Akceptuję
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
