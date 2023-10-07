import type { ReactElement } from 'react';
import { SectionInfiniteScroll, LayoutListingPost, useSeoConfig, PostList, useSiteConfig } from 'design-system';
import { defaultSuggestions, FOOTER_CONFIG, HEADER_MENU_CONFIG } from '../../config';
import { useSearch } from '../../hooks';
import { useGetArticlesQuery } from '../../gql';
import { adapterArticlesData } from '../../utils/adapters/adapterArticlesData';

function Index(): ReactElement  {
  const onSearchQuery = useSearch();
  const seo = useSeoConfig({});
  const { client} = useSiteConfig();
  const isMobile = client?.platform.isMobile || false;
  const { data, fetchMore } = useGetArticlesQuery({
    variables: {
      pageSize: 12,
      page: 1,
      type: ['article', 'service']
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
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
      searchEngine={{ defaultSuggestions, onSearchQuery }}
      seo={seo}
      siteBarLeft={<p>left</p>}
      siteBarRight={<p>right</p>}
    >
      <SectionInfiniteScroll
        onScrollEnd={handleScrollEnd}
        page={data?.articles?.meta.pagination.page || 1}
        pageCount={data?.articles?.meta.pagination.pageCount || 1}
      >
        {data ? adapterArticlesData(data, "small").map((article) => (
          <PostList {...article} key={article.id || 'fallback'} />
        )) : null}
      </SectionInfiniteScroll>
    </LayoutListingPost>
  );
};

export default Index;
