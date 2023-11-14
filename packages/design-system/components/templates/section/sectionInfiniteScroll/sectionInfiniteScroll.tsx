import type { ReactElement } from 'react';
import { Confetti } from '../../../molecules';
import { LoadingDots } from '../../../atoms';
import { useIsNextPage, useLoadNextPage } from './hooks';
import styles from './sectionInfiniteScroll.module.scss';
import type { SectionInfiniteScrollProps } from './types';

export function SectionInfiniteScroll({ page, pageCount, onScrollEnd, children }: SectionInfiniteScrollProps ): ReactElement {
  const { isNextPage } = useIsNextPage({ page, pageCount });
  const { isLoadingNextPage, infiniteScrollRef } = useLoadNextPage(isNextPage, page, onScrollEnd);

  return (
      <div className={styles.wrapper} ref={infiniteScrollRef}>
        {children}
        {isLoadingNextPage && (<div className={styles.wrapperLoading}><LoadingDots size={2}/></div>)}
        {!isNextPage && <Confetti title="Właśnie dotarłeś do końca internetów, brawo 😎" />}
      </div>
  );
}
