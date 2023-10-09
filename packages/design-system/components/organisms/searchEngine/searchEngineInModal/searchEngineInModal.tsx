/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import { useRef, useState, useCallback } from 'react';
import type { ReactElement, KeyboardEvent } from 'react';
import classnames from 'classnames';
import { Search } from 'react-feather';
import { useSiteConfig } from '../../../../hooks';
import { KeyboardShortcut, Modal } from '../../../atoms';
import { SearchModalContent } from './components/searchModalContent';
import type { SearchEngineInModalProps } from "./types";
import styles from './searchEngineInModal.module.scss';

export function SearchEngineInModal({ className, searchEngineConfig }: SearchEngineInModalProps): ReactElement {
  const { client } = useSiteConfig();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = useCallback((): void => {
    setIsOpenModal(prevState => !prevState);
  }, []);

  const handleClickOutside = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      toggleModal();
    }
  }, [toggleModal]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleModal();
    }
  }, [toggleModal]);


  return (
    <>
      <div
        className={classnames(styles.wrapper, className)}
        onClick={toggleModal}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <Search size={18} />
        <p>Szukaj...</p>
        {client?.platform.isDesktop && (
          <KeyboardShortcut
            callback={toggleModal}
            className={styles.shortcut}
            command
          >
            K
          </KeyboardShortcut>
        )}
      </div>
      <Modal
        className={styles.modal}
        onClick={handleClickOutside}
        onClose={toggleModal}
        open={isOpenModal}
        renderDirectlyInBody
      >
        <SearchModalContent
          modalRef={modalRef}
          searchEngineConfig={searchEngineConfig}
        />
      </Modal>
    </>
  );
}
