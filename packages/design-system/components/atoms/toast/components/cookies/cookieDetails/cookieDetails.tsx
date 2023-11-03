import { useContext, useState } from "react";
import type { ReactElement } from 'react';
import { X } from 'react-feather';
import { generateUniqueId } from "utils";
import { Collapse, CollapseGroup } from "../../../../../molecules/collspace";
import { setCookies } from "../../../utils";
import { Modal } from "../../../../modal";
import type { CookieDetailsProps } from "./types";
import styles from './cookieDetails.module.scss';

export function CookieDetails ( {siteConfig, ToastChunksContext}: CookieDetailsProps ): ReactElement {
  const {toastChunkDispatch} = useContext ( ToastChunksContext );
  const [open, setOpen] = useState ( false );

  function closeModal(): void {
    setOpen ( false );
  };

  function acceptCookies(): void {
    toastChunkDispatch ( {type: "REMOVE_TOAST", payload: {id: "cookieInfoDefault"}} );
    setCookies ( {} );
    closeModal ();
  };

  function renderCollapse ( title: string, content: string ): ReactElement {
    return (
      <Collapse id={`${generateUniqueId ()}`} isOpen title={<p>{title}</p>} >
        <p>{content}</p>
      </Collapse>
    );
  }

  return (
    <>
      <button
        className="btn secondary"
        onClick={() => {
          setOpen ( true )
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
            <CollapseGroup className={styles.collapseGroup}>
              {renderCollapse ( "Pliki cookie niezbędne do działania strony", "Pliki cookie niezbędne do działania strony umożliwiają zapamiętanie Twoich preferencji, takich jak akceptacja cookies czy wybór stylu. Są kluczowe dla prawidłowego i spersonalizowanego funkcjonowania witryny." )}
              {renderCollapse ( "Analiza/Analityka", "Używamy plików cookie do zbierania danych o tym, jak korzystasz z naszej strony. Pomaga nam to w optymalizacji treści, zrozumieniu preferencji użytkowników i ulepszaniu funkcjonalności. Twoja prywatność jest dla nas ważna, a dane są anonimowe." )}
            </CollapseGroup>
          </div>
          <div className={styles.modalFooter}>
            <button className="btn success" onClick={acceptCookies} type="button">
              Akceptuję
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
