/* eslint-disable react/jsx-no-leaked-render, react/no-unknown-property -- It is ok */
import type { ReactElement } from 'react';
import { BookOpen, FileText } from 'react-feather';
import classnames from 'classnames';
import { Link } from '../../../../../../../atoms';
import styles from './suggestionList.module.scss';
import type { SuggestionListProps } from "./types";


export function SuggestionList (
  {suggestions, listType, onMouseEnter, currentHoveredSuggestionIndex}: SuggestionListProps
): ReactElement {
  const generateKey = (slug: string, index: number): string => `${slug}-${index}`;

  return (
    <ul className={classnames(styles.suggestionList, 'searchResultList')}>
      <style jsx>{`
        .searchResultList {
          &:after {
            top: ${currentHoveredSuggestionIndex * 6}rem;
          }
        }
      `}</style>
      {suggestions.map(({title, slug, type, lead}, index) => (
        <li key={generateKey(slug, index)} onMouseEnter={() => { onMouseEnter(index); }}>
          <Link href={`/${slug}`} title={title}>
            {type === 'post' ? <BookOpen/> : <FileText/>}
            <div className={styles.content}>
              <p className={styles.title}>{title}</p>
              {listType === 'searchResults' && lead && <span className={styles.lead}>{lead}</span>}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
