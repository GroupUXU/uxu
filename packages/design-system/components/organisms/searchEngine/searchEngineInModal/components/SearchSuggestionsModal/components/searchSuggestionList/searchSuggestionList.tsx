/* eslint-disable react/jsx-no-leaked-render, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events -- I don't have time for this fix */
import React, { useCallback } from 'react';
import type { ReactElement, CSSProperties } from 'react';
import { BookOpen, FileText } from 'react-feather';
import classnames from 'classnames';
import { Link } from '../../../../../../../atoms/link';
import styles from './searchSuggestionList.module.scss';
import type { SuggestionListProps } from "./types";

export function SearchSuggestionList ({ suggestions, listType, onMouseEnter, currentHoveredSuggestionIndex, setIsOpenModal }: SuggestionListProps): ReactElement {

  const handleMouseEnter = useCallback((index: number) => {
    onMouseEnter(index);
  }, [onMouseEnter]);

  const handleClick = useCallback(() => {
    setIsOpenModal(false);
  }, [setIsOpenModal]);

  const afterStyle: CSSProperties = {
    top: `${currentHoveredSuggestionIndex * 6}rem`
  };

  return (
    <ul className={classnames(styles.searchResultList, 'searchResultList')} style={{ '--uxu-searchResultList': afterStyle.top } as CSSProperties}>
      {suggestions.map(({ title, slug, type, lead }, index: number) => (
        <li
          key={slug}
          onClick={handleClick}
          onMouseEnter={() => { handleMouseEnter ( index ) }}
        >
          <Link href={slug} title={title}>
            {type === 'post' ? <BookOpen /> : <FileText />}
            <div className={styles.content}>
              <p className={styles.title}>{title}</p>
              {listType === 'searchResults' && lead && <span className={styles.lead}>{lead}</span>}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}