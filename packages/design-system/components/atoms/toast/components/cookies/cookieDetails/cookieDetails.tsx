import { useContext, useState } from "react";
import type { ReactElement } from 'react';
import { X } from 'react-feather';
import { Modal } from "../../../../modal";
import { Collapse, CollapseGroup } from "../../../../../molecules/collspace";
import { setCookies } from "../../../utils";
import { generateUniqueId } from "utils";
import type { CookieDetailsProps } from "./types";
import styles from './cookieDetails.module.scss';


export function CookieDetails({ siteConfig, ToastChunksContext }: CookieDetailsProps): ReactElement {
  const { toastChunkDispatch } = useContext(ToastChunksContext);
  const [open, setOpen] = useState(false);

  function closeModal(): void {
    setOpen ( false )
  };
  const acceptCookies = (): void => {
    toastChunkDispatch({ type: "REMOVE_TOAST", payload: { id: "cookieInfoDefault" } });
    setCookies({});
    closeModal();
  };

  const cookieItems = [
    {
      id: "necessary",
      label: { title: "Niezbędne pliki cookie", bold: true },
      children: <p>To są pliki cookie wymagane do działania strony {siteConfig.projectName}</p>,
    },
    {
      id: "analytics",
      label: { title: "Analityka", bold: true },
      children: <span>Pliki cookie służące do analizy i poprawy jakości naszej witryny</span>,
    },
    {
      id: "ads",
      label: { title: "Reklamy", bold: true },
      children: <span>Pliki cookie wykorzystywane do dostosowywania wyświetlanych reklam</span>,
    },
  ];

  return (
    <>
      <button
        className="btn secondary"
        onClick={() => {
          setOpen ( true )
        }}
        style={{ marginRight: "var(--uxu-space-default)" }}
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
            <span><strong>Preferencje plików cookie</strong></span>
            <button onClick={closeModal} type="button">
              <X size={30}/>
            </button>
          </div>
          <div className={styles.modalContent}>
            <p>Używamy plików cookie, aby poprawić komfort korzystania z witryny. Do działania {siteConfig.projectName} wymagane są pliki cookie.</p>
            <CollapseGroup className={styles.collapseGroup}>
               <Collapse title={<p>Pliki cookie niezbędne do działania strony</p>} isOpen id={`${generateUniqueId()}`}><p>Pliki cookie niezbędne do działania strony umożliwiają zapamiętanie Twoich preferencji, takich jak akceptacja cookies czy wybór stylu. Są kluczowe dla prawidłowego i spersonalizowanego funkcjonowania witryny.</p></Collapse>
                <Collapse title={<p>Analiza/Analityka</p>} isOpen id={`${generateUniqueId()}`}><p>Używamy plików cookie do zbierania danych o tym, jak korzystasz z naszej strony. Pomaga nam to w optymalizacji treści, zrozumieniu preferencji użytkowników i ulepszaniu funkcjonalności. Twoja prywatność jest dla nas ważna, a dane są anonimowe.</p></Collapse>
            </CollapseGroup>
          </div>
          <div className={styles.modalFooter}>
            <button className="btn success" type="button">
              Akceptuję
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
