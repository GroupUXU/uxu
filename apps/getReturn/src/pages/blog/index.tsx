import type { ReactElement } from 'react';
import type { PostShort } from 'utils';
import { LayoutListingPost } from 'design-system/components/layout/layoutListingPost';
import { SectionInfiniteScroll } from 'design-system/components/templates/section/sectionInfiniteScroll';
import { PostList } from 'design-system/components/organisms/postList';
import { StickyWrapper } from 'design-system/components/atoms/stickyWrapper';
import { Tree, renderBranches } from 'design-system/components/molecules/tree';
import { CrumbleMenu } from 'design-system/components/molecules/crumbleMenu';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import { footerConfig, headerMenuConfig, searchEngineConfig, siteBarMenuConfig } from '../../config';
import { useGetArticlesQuery } from '../../gql';
import { adapterArticlesData } from '../../utils/adapters/adapterArticlesData';

function Index(): ReactElement  {
  const seo = useSeoConfig({});
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
      footer={footerConfig}
      headerMenu={headerMenuConfig}
      searchEngineConfig={searchEngineConfig}
      seo={seo}
      siteBarLeft={(
        <StickyWrapper top="calc(var(--uxu-space-large) * 3)">
          <Tree activeHref="/">
            {renderBranches(siteBarMenuConfig)}
          </Tree>
        </StickyWrapper>
      )}
      topElement={<CrumbleMenu data={[{ title: "home", href: "/" }, { title: "blog", href: "/blog" }]}/>}
    >
      <SectionInfiniteScroll
        onScrollEnd={handleScrollEnd}
        page={data?.articles?.meta.pagination.page || 1}
        pageCount={data?.articles?.meta.pagination.pageCount || 1}
      >
        {data ? adapterArticlesData(data, "small").map((article: PostShort) => (
          <PostList {...article} key={article.id || 'fallback'} />
        )) : null}
      </SectionInfiniteScroll>
    </LayoutListingPost>
  );
};

export default Index;
