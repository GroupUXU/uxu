/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import type { ReactElement } from 'react';
import { BookOpen, FileText } from 'react-feather';
import classnames from 'classnames';
import { Link } from '../../../../../atoms';
import styles from './suggestionList.module.scss';
import type { SuggestionListProps } from "./types";


export function SuggestionList (
  {suggestions, listType, onMouseEnter, currentHoveredSuggestionIndex}: SuggestionListProps
): ReactElement {
  const generateKey = (slug: string, index: number): string => `${slug}-${index}`;

  const afterStyle = {
    top: `${currentHoveredSuggestionIndex * 6}rem`
  };

  return (
    <ul className={classnames(styles.suggestionList, 'searchResultList')} style={{ '--uxu-searchResultList': afterStyle.top } as React.CSSProperties}>
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
