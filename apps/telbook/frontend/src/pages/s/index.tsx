import type { ReactElement } from 'react';
import type { PostShort } from "utils";
import type { NormalizedCacheObject } from "@apollo/client";
import { SectionInfiniteScroll } from 'design-system/components/templates/section/sectionInfiniteScroll';
import { LayoutListingPost } from 'design-system/components/layout/layoutListingPost/layoutListingPost';
import { PostList } from 'design-system/components/organisms/postList';
import { Tree, renderBranches } from 'design-system/components/molecules/tree';
import { StickyWrapper } from 'design-system/components/atoms/stickyWrapper';
import { CrumbleMenu } from 'design-system/components/molecules/crumbleMenu';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import { LeadPostWithList } from "design-system/components/templates/section/leadPostWithList";
import { footerConfig, headerMenuConfig, siteBarMenuConfig, searchEngineConfig } from '../../config';
import { clientGetArticlesQuery, useGetArticlesQuery } from '../../gql';
import { adapterArticlesData } from '../../utils/adapters/adapterArticlesData';

function Index(): ReactElement  {
  const seo = useSeoConfig({});
  const { data, fetchMore } = useGetArticlesQuery({
    variables: {
      pageSize: 12,
      page: 1,
      type: ['service']
    },
    ssr: true
  });

  const handleScrollEnd = async (page: number): Promise<{ page?: number }> => {
    try {
      await fetchMore({
        variables: {
          pageSize: 12,
          page,
          type: ['service']
        }
      });
      return { page: page + 1 };
    } catch (error) {
      return { page };
    }
  };

  const articlesCopy: Array<PostShort> = data?.articles?.data ? adapterArticlesData(data, "medium") : [];
  const leadPostWithListData: Array<PostShort> = articlesCopy.slice ( 0, 5 );
  const postListData: Array<PostShort> = articlesCopy.slice ( 5 );

  return (
  <LayoutListingPost
    footer={footerConfig}
    headerMenu={headerMenuConfig}
    searchEngineConfig={searchEngineConfig}
    seo={seo}
    siteBarLeft={(
      <StickyWrapper top="calc(var(--uxu-space-large) * 3)">
        <Tree activeHref="/">
          {renderBranches ( siteBarMenuConfig )}
        </Tree>
      </StickyWrapper>
    )}
    topElement={(
      <>
        <LeadPostWithList posts={leadPostWithListData}/>
        <CrumbleMenu data={[{title: "home", href: "/"}, {title: "usługi", href: "/s"}]}/>
      </>
    )}
  >
    <SectionInfiniteScroll
      onScrollEnd={handleScrollEnd}
      page={data?.articles?.meta.pagination.page || 1}
      pageCount={data?.articles?.meta.pagination.pageCount || 1}
    >
      {postListData.map ( ( article ) => (<PostList {...article} key={article.id || 'fallback'}/>) )}
    </SectionInfiniteScroll>
  </LayoutListingPost>
  );
};


export async function getServerSideProps(): Promise<{props: { initialApolloState: NormalizedCacheObject }}> {
  const { apolloClient } = await clientGetArticlesQuery({ variables: { pageSize: 12, page: 1, type: ['service'] }})
  return {
    props: {
      initialApolloState: apolloClient.extract(),
    },
  };
}

export default Index;
