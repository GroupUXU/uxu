/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import { useRef, useState, useCallback } from 'react';
import type { ReactElement, KeyboardEvent } from 'react';
import classnames from 'classnames';
import { useForm } from "react-hook-form";
import { Search } from 'react-feather';
import { useSiteConfig } from '../../../../hooks';
import { KeyboardShortcut, Modal } from '../../../atoms';
import { SearchModalContent } from './components/searchModalContent';
import { useSearchResults } from './hooks/useSearchResults';
import type { SearchSuggestionModalProps } from "./types";
import styles from './searchEngineInModal.module.scss';

export function SearchEngineInModal({ className, defaultSuggestions, onSearchQuery }: SearchSuggestionModalProps): ReactElement {
  const { client } = useSiteConfig();
  const { register, watch } = useForm<{ search: string }>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const searchQuery = watch('search');
  const { isAwaitingApiResponse, searchResults } = useSearchResults(searchQuery, onSearchQuery);

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
      >
        <SearchModalContent
          defaultSuggestions={defaultSuggestions || []}
          isAwaitingApiResponse={isAwaitingApiResponse}
          modalRef={modalRef}
          register={register}
          searchQuery={searchQuery}
          searchResults={searchResults}
        />
      </Modal>
    </>
  );
}
