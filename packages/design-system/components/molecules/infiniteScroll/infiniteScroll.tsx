import type { ReactElement } from 'react';
import { LoadingDots } from '../../atoms/loading';
import { useLoadNextPage } from './hooks';
import type { SectionInfiniteScrollProps } from './types';
import styles from './infiniteScroll.module.scss';

export function InfiniteScroll({ page, pageCount, onScrollEnd, children }: SectionInfiniteScrollProps ): ReactElement {
  const { isLoadingNextPage, infiniteScrollRef } = useLoadNextPage( page, pageCount, onScrollEnd);

  return (
      <div className={styles.wrapper} ref={infiniteScrollRef}>
        {children}
        {isLoadingNextPage ? (<div className={styles.wrapperLoading}><LoadingDots size={2}/></div>) : null}
      </div>
  );
}
