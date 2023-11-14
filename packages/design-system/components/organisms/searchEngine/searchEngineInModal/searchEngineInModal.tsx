/* eslint-disable react/jsx-no-leaked-render -- all ok */
import { useRef, useState, useCallback, useEffect } from 'react';
import type { ReactElement, KeyboardEvent, MouseEvent } from 'react';
import classnames from 'classnames';
import { useForm } from "react-hook-form";
import { Search } from 'react-feather';
import { Throttle } from 'utils';
import type { SearchEngineConfig } from 'utils';
import { useSiteConfig } from '../../../../hooks';
import { KeyboardShortcut, Modal } from '../../../atoms';
import { SearchSuggestionsModal } from './components/SearchSuggestionsModal';
import { useSearchResults } from './hooks/useSearchResults';
import styles from './searchEngineInModal.module.scss';
import type { SearchSuggestionContentDetails } from "./types";


const throttle = new Throttle(150)

export type SearchSuggestionModalProps = {
  className?: string,
  searchEngineConfig: SearchEngineConfig<Array<SearchSuggestionContentDetails>>
}

export function SearchEngineInModal({ className, searchEngineConfig }: SearchSuggestionModalProps): ReactElement {
  const { config: { client } } = useSiteConfig();
  const { register, watch } = useForm<{ search: string }>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const searchQuery: string = watch('search');
  const {setSearchQuery, searchResults, isWaitingForQuery} = useSearchResults();

  const toggleModal = useCallback((): void => {
    setIsOpenModal(prevState => !prevState);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      toggleModal();
    }
  }, [toggleModal]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleModal();
    }
  }, [toggleModal]);


  useEffect(() => {
    throttle.setLastTimeOut(() => { setSearchQuery(searchQuery) })
  }, [searchQuery, setSearchQuery]);

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
        <SearchSuggestionsModal
          defaultSuggestions={searchEngineConfig.defaultSugestions}
          isAwaitingApiResponse={isWaitingForQuery}
          modalRef={modalRef}
          register={register}
          searchQuery={searchQuery}
          searchResults={searchResults}
          setIsOpenModal={setIsOpenModal}
        />
      </Modal>
    </>
  );
}
