import type { ReactElement } from "react";
import { useStats } from "react-instantsearch";
import styles from "../../searchModalContent.module.scss";
import { SuggestionList } from "../suggestionList";
import type { CustomStatsProps } from './types';

export function CustomStats ( {suggestions, onMouseEnter, currentHoveredSuggestionIndex}: CustomStatsProps): ReactElement {
  const {
    nbHits,
    hitsPerPage,
    processingTimeMS,
    query,
  } = useStats ();

  if ( nbHits > 1 && query.length > 1 ) {
    return <span
      className={styles.info}>Znaleziono {nbHits > Number ( hitsPerPage ) ? hitsPerPage : nbHits} wyników w {processingTimeMS}ms</span>
  }


  return (
    <>
      {query.length < 2 ? <span className={styles.info}>Aby rozpocząć wyszukiwanie, wpisz więcej niż 2 znaki</span> :
        <span className={styles.info}>Nic nie znaleziono dla hasła: <i>{query}</i></span>}
      <span className={styles.info}>Polecane dla Ciebie</span>
      <SuggestionList
        currentHoveredSuggestionIndex={currentHoveredSuggestionIndex}
        listType="defaultSuggestions"
        onMouseEnter={onMouseEnter}
        suggestions={suggestions}
      />
    </>
  )
}