import type { ReactElement } from 'react';
import {
  SectionInfiniteScroll,
  LayoutListingPost,
  PostList,
  Tree,
  renderBranches,
  StickyWrapper,
  CrumbleMenu,
  LeadPostWithList
} from 'design-system';
import { useSeoConfig } from 'hooks';
import type { PostShort } from "utils";
import { footerConfig, headerMenuConfig, siteBarMenuConfig, searchEngineConfig } from '../config';
import { useGetArticlesQuery } from '../gql';
import { adapterArticlesData } from '../utils/adapters/adapterArticlesData';

function Index (): ReactElement {
  const seo = useSeoConfig ( {} );

  const {data, fetchMore} = useGetArticlesQuery ( {
    variables: {
      pageSize: 12,
      page: 1,
      type: ['article']
    },
    ssr: true
  } );

  const handleScrollEnd = async ( page: number ): Promise<{
    page?: number
  }> => {
    try {
      await fetchMore ( {
        variables: {
          pageSize: 12,
          page,
          type: ['article']
        }
      } );
      return {page: page + 1};
    } catch (error) {
      return {page};
    }
  };


  let leadPostWithListData: Array<PostShort> = [];
  let postListData: Array<PostShort> = [];

  if ( data ) {
    const articlesCopy = data.articles?.data || [];

    const firstFiveArticles = articlesCopy.slice ( 0, 5 );
    const remainingArticles = articlesCopy.slice ( 5 );

    leadPostWithListData = adapterArticlesData (
      {...data, articles: { meta: data.articles?.meta, data: firstFiveArticles }},
      "medium"
    );

    postListData = adapterArticlesData (
      {...data, articles: { meta: data.articles?.meta, data: remainingArticles }},
      "small"
    );
  }


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
          <CrumbleMenu data={[{title: "home", href: "/"}]}/>
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

export default Index;
