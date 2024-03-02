export type InfiniteScroll = {
		page: number;
		pageCount: number;
		onScrollEnd: (nextPage: number) => Promise<{ page?: number }>;
};
