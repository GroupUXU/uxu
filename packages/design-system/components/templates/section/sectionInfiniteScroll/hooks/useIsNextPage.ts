type UsePaginationProps = {
  page: number;
  pageCount: number;
};

export function useIsNextPage({ page, pageCount }: UsePaginationProps): { isNextPage: boolean; } {
  const isNextPage = page < pageCount;
  return { isNextPage };
}
