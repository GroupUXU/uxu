import React, { useState } from "react";
import type { ReactElement } from "react";
import { Input } from "../../../../../molecules/inputs";
import { LoadingWheel } from "../../../../../atoms/loading";
import { SearchSuggestionList } from "./components/searchSuggestionList";
import styles from "./searchSuggestionsModal.module.scss";
import type { SearchModalContentProps } from './types';

export function SearchSuggestionsModal({ defaultSuggestions, isAwaitingApiResponse, searchQuery, searchResults, setIsOpenModal, modalRef, register }: SearchModalContentProps): ReactElement {
  const [currentHoveredSuggestionIndex, setCurrentHoveredSuggestionIndex] = useState(0);
  const isLoading = typeof searchQuery === 'string' && searchQuery.length > 1 && isAwaitingApiResponse;
  const showSearchResults = typeof searchQuery === 'string' && searchQuery.length > 1 && !isAwaitingApiResponse;
  const showDefaultSuggestions = !(isLoading || showSearchResults);

  
  console.log(currentHoveredSuggestionIndex)

  let content = <span className={styles.info}>Aby rozpocząć wyszukiwanie, wpisz więcej niż 2 znaki</span>;

  if (isLoading) {
    content = (
      <div className={styles.wrapperLoading}>
        <LoadingWheel size={2} />
      </div>
    );
  } else if (showSearchResults) {
    content = (
      <>
        <span className={styles.info}>{searchResults.length ? `Znaleziono ${searchResults.length} wyników` : `Nic nie znaleziono dla hasła: ${searchQuery}`}</span>
        <SearchSuggestionList
          currentHoveredSuggestionIndex={currentHoveredSuggestionIndex}
          listType="searchResults"
          onMouseEnter={setCurrentHoveredSuggestionIndex}
          setIsOpenModal={setIsOpenModal}
          suggestions={searchResults}
        />
      </>
    );
  } else if (showDefaultSuggestions) {
    content = (
      <>
        <span className={styles.info}>Polecane dla Ciebie</span>
        <SearchSuggestionList
          currentHoveredSuggestionIndex={currentHoveredSuggestionIndex}
          listType="defaultSuggestions"
          onMouseEnter={setCurrentHoveredSuggestionIndex}
          setIsOpenModal={setIsOpenModal}
          suggestions={defaultSuggestions}
        />
      </>
    );
  }

  return (
    <div className={styles.container} ref={modalRef}>
      <div className={styles.header}>
        <form>
          <Input
            className={styles.wrapperSearch}
            placeholder="Co potrzebujesz?"
            type="text"
            {...register('search')}
          />
        </form>
      </div>
      <div className={styles.content}>
        {content}
      </div>
    </div>
  );
}
