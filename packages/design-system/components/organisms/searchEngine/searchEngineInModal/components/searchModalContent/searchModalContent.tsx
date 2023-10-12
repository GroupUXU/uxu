import { useState } from "react";
import { InstantSearch, SearchBox, Configure } from 'react-instantsearch';
import type { ReactElement } from "react";
import type { SearchModalContentProps } from './types';
import styles from "./searchModalContent.module.scss";
import { CustomStats, SearchResult } from "./components";

export function SearchModalContent({ modalRef, searchEngineConfig }: SearchModalContentProps): ReactElement {
  const [currentHoveredSuggestionIndex, setCurrentHoveredSuggestionIndex] = useState(1);
  const [query, setQuery] = useState('');

  return (
    <InstantSearch
      indexName={searchEngineConfig.indexName}
      onStateChange={(value) => {
        setQuery(value.uiState.article.query || "");
      }}
      searchClient={searchEngineConfig.searchClientData}
    >
      <div className={styles.container} ref={modalRef}>
        <div className={styles.header}>
          <SearchBox className={styles.wrapperSearch} placeholder="Co potrzebujesz?" />
        </div>
        <div className={styles.content}>
          <CustomStats
            currentHoveredSuggestionIndex={currentHoveredSuggestionIndex}
            onMouseEnter={setCurrentHoveredSuggestionIndex}
            suggestions={searchEngineConfig.defaultSugestions}
          />
          <Configure />
          {query.length >= 2 && (
            <SearchResult
              currentHoveredSuggestionIndex={currentHoveredSuggestionIndex}
              onMouseEnter={setCurrentHoveredSuggestionIndex}
            />
          )}
        </div>
      </div>
    </InstantSearch>
  );
}
