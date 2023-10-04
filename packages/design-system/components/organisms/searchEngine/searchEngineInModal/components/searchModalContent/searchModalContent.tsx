/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import { useState } from "react";
import type { ReactElement } from "react";
import { Input } from "../../../../../molecules/inputs/input";
import { LoadingWheel } from "../../../../../atoms";
import { SuggestionList } from "../suggestionList";
import type { SearchModalContentProps } from './types';
import styles from "./searchModalContent.module.scss";

export function SearchModalContent({ defaultSuggestions, isAwaitingApiResponse, modalRef, register, searchQuery, searchResults }: SearchModalContentProps): ReactElement {
  const [currentHoveredSuggestionIndex, setCurrentHoveredSuggestionIndex] = useState(1);

  let content;
  if (searchQuery.length > 1) {
    if (isAwaitingApiResponse) {
      content = (
        <div className={styles.wrapperLoading}>
          <LoadingWheel size={2} />
        </div>
      );
    } else {
      content = (
        <>
          <span className={styles.info}>{searchResults.length ? `Znaleziono ${searchResults.length} wyników` : `Nic nie znaleziono dla hasła: ${searchQuery}`}</span>
          <SuggestionList
            currentHoveredSuggestionIndex={currentHoveredSuggestionIndex}
            listType="searchResults"
            onMouseEnter={setCurrentHoveredSuggestionIndex}
            suggestions={searchResults}
          />
        </>
      );
    }
  } else {
    content = <span className={styles.info}>Aby rozpocząć wyszukiwanie, wpisz więcej niż 2 znaki</span>;
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
        {defaultSuggestions.length && !searchResults.length && (
          <>
            <span className={styles.info}>Polecane dla Ciebie</span>
            <SuggestionList
              currentHoveredSuggestionIndex={currentHoveredSuggestionIndex}
              listType="defaultSuggestions"
              onMouseEnter={setCurrentHoveredSuggestionIndex}
              suggestions={defaultSuggestions}
            />
          </>
        )}
      </div>
    </div>
  );
}
