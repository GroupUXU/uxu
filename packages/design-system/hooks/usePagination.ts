import { useEffect, useState, useCallback } from 'react';
import type { MutableRefObject } from 'react';
import { Throttle } from '../utils';

type UsePaginationProps = {
  page: number;
  pageCount: number;
  infiniteScrollRef: MutableRefObject<HTMLElement | null>;
  onScrollEnd: (nextPage: number) => Promise<{ page?: number }>;
};

const SCROLL_THROTTLE_WAIT_TIME = 100;
const scrollThrottle = new Throttle(SCROLL_THROTTLE_WAIT_TIME);

export function usePagination({ page, pageCount, infiniteScrollRef, onScrollEnd }: UsePaginationProps): {
  isLoadingNextPage: boolean;
  isNextPage: boolean;
} {
  const [activePage, setActivePage] = useState(page);
  const [isNextPage, setIsNextPage] = useState(true);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);

  const loadNextPage = useCallback((): void => {
    if (activePage >= pageCount) return;

    scrollThrottle.setLastTimeOut(() => {
      const listBottom = infiniteScrollRef.current?.getBoundingClientRect()?.bottom ?? 0;
      const offsetTrigger = Math.floor(window.innerHeight * 3 / 1.5);

      if (listBottom - offsetTrigger <= 0) {
        setIsLoadingNextPage(true);

        onScrollEnd(activePage + 1).then(({ page: nextPage }) => {
          setIsLoadingNextPage(false);
          if (typeof nextPage === 'number' && nextPage !== activePage) {
            setActivePage(nextPage);
          }
        }).catch(() => { /* empty */ });
      }
    });
  }, [activePage, infiniteScrollRef, onScrollEnd, pageCount]);

  useEffect(() => {
    if (activePage >= pageCount) {
      setIsNextPage(false);
    } else setIsNextPage(true);

    window.addEventListener('scroll', loadNextPage);

    return () => { window.removeEventListener('scroll', loadNextPage); };
  }, [pageCount, activePage, loadNextPage]);

  return { isLoadingNextPage, isNextPage };
}
