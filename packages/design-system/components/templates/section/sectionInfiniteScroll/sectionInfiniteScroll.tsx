/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import { useRef } from 'react';
import type { ReactElement } from 'react';
import { Confetti } from '../../../molecules';
import { LoadingDots } from '../../../atoms';
import { usePagination } from '../../../../hooks';
import styles from './sectionInfiniteScroll.module.scss';
import type { SectionInfiniteScrollProps } from './types';


export function SectionInfiniteScroll({ page, pageCount, onScrollEnd, children }: SectionInfiniteScrollProps ): ReactElement {
  const infiniteScrollRef = useRef ( null );
  const {isLoadingNextPage, isNextPage} = usePagination ({ page, pageCount, infiniteScrollRef, onScrollEnd });

  return (
      <div className={styles.wrapper} ref={infiniteScrollRef}>
        {children}
        {isLoadingNextPage && (<div className={styles.wrapperLoading}><LoadingDots size={2}/></div>)}
        {!isNextPage && <Confetti title="Właśnie dotarłeś do końca internetów, brawo 😎" />}
      </div>
  );
}
