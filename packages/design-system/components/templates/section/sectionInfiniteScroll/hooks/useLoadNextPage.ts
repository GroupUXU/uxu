import type { RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Throttle } from '../../../../../utils';

const SCROLL_THROTTLE_WAIT_TIME = 100;

export const useLoadNextPage = (
  isNextPage: boolean,
  page: number,
  onScrollEnd: (nextPage: number) => Promise<{ page?: number }>,
): {
  isLoadingNextPage: boolean;
  infiniteScrollRef: RefObject<HTMLDivElement>;
} => {
  const [activePage, setActivePage] = useState(page);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const infiniteScrollRef = useRef<HTMLDivElement>(null);
  const scrollThrottleRef = useRef<Throttle | null>(null);

  useEffect(() => {
    scrollThrottleRef.current = new Throttle(SCROLL_THROTTLE_WAIT_TIME);
    return () => { scrollThrottleRef.current = null; };
  }, []);

  useEffect(() => {
    setActivePage(page);
  }, [page]);

  const loadNextPage = useCallback(() => {
    if (!isNextPage || !scrollThrottleRef.current) return;

    scrollThrottleRef.current.setLastTimeOut(() => {
      if (infiniteScrollRef.current) {
        const listBottom = infiniteScrollRef.current.getBoundingClientRect().bottom || 0;
        const offsetTrigger = Math.floor(window.innerHeight * 3 / 1.5);

        if (listBottom - offsetTrigger <= 0) {
          setIsLoadingNextPage(true);
          onScrollEnd(activePage + 1)
            .then(() => {
              setIsLoadingNextPage(false);
            })
            .catch(() => {
              setIsLoadingNextPage(false);
              // handle errors as necessary, possibly setting some error state
            });
          setActivePage((prevPage) => prevPage + 1);
        }
      }
    });
  }, [isNextPage, onScrollEnd, activePage]);

  useEffect(() => {
    window.addEventListener('scroll', loadNextPage);
    return () => { window.removeEventListener('scroll', loadNextPage); };
  }, [loadNextPage]);

  return { isLoadingNextPage, infiniteScrollRef };
};
