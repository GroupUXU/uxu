import type { ReactElement } from 'react';
import { SectionInfiniteScroll, LayoutListingPost, useSeoConfig, PostList } from 'design-system';
import { defaultSuggestions } from '../config';
import { useSearch } from '../hooks';
import { useGetArticlesQuery } from '../gql';
import { adapterArticlesData } from '../utils/adapters/adapterArticlesData';

function Index(): ReactElement  {
  const onSearchQuery = useSearch();
  const seo = useSeoConfig({});

  const { data, fetchMore } = useGetArticlesQuery({
    variables: {
      pageSize: 12,
      page: 1,
      type: ['article']
    },
    ssr: true
  });

  const handleScrollEnd = async (page: number): Promise<{ page?: number }> => {
    try {
      await fetchMore({
        variables: {
          pageSize: 12,
          page,
          type: ['article']
        }
      });
      return { page: page + 1 };
    } catch (error) {
      return { page };
    }
  };

  return (
    <LayoutListingPost
      footer={{ brand: "wTrasie", footerColumns: [] }}
      searchEngine={{ defaultSuggestions, onSearchQuery }}
      seo={seo}
      siteBarLeft={<p>left</p>}
      siteBarRight={<p>right</p>}
    >
      <SectionInfiniteScroll
        onScrollEnd={handleScrollEnd}
        page={1}
        pageCount={data?.articles?.meta.pagination.pageCount || 1}
      >
        {data ? adapterArticlesData(data).map((article) => (
          <PostList {...article} key={article.id || 'fallback'} />
        )) : null}
      </SectionInfiniteScroll>
    </LayoutListingPost>
  );
};

export default Index;
