import type { ReactElement } from 'react';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { LayoutListingPost } from 'design-system/components/layout/layoutListingPost';
import { InfiniteScroll } from 'design-system/components/molecules/infiniteScroll';
import { PostList } from 'design-system/components/organisms/postList';
import { StickyWrapper } from 'design-system/components/atoms/stickyWrapper';
import { Tree, renderBranches } from 'design-system/components/molecules/tree';
import { CrumbleMenu } from 'design-system/components/molecules/crumbleMenu';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import type { PostShort } from "utils";
import { useGetArticlesWithTagQuery } from '../../gql';
import { adapterArticlesData } from '../../utils/adapters/adapterArticlesData';
import { footerConfig, headerMenuConfig, searchEngineConfig, siteBarMenuConfig } from "../../config";

type TagProps = {
  tagID: string;
  tagName: string;
}

function isStringArray(value: unknown): boolean {
  return Array.isArray(value) && value.every(item => typeof item === 'string');
}

export default function Tag({ tagID , tagName }: TagProps ): ReactElement {
  const { data, fetchMore } = useGetArticlesWithTagQuery({
    variables: {
      pageSize: 12,
      page: 1,
      type: ['article', 'service'],
      tagID
    },
    ssr: true
  });
  const seo = useSeoConfig({ title: tagName });

  const handleScrollEnd = async (page: number): Promise<{ page?: number }> => {
    try {
      await fetchMore({
        variables: {
          pageSize: 12,
          page,
          type: ['article', 'service']
        }
      });
      return { page: page + 1 };
    } catch (error) {
      return { page }
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
      topElement={
        <CrumbleMenu data={[{title: "home", href: "/"}, {title: tagName, href: `/t/${tagID}/${tagName}`}]}/>
      }
    >
      <InfiniteScroll
        onScrollEnd={handleScrollEnd}
        page={1}
        pageCount={data?.articles?.meta.pagination.pageCount || 1}
      >
        {data ? adapterArticlesData(data, "small").map((article: PostShort) => {
          return (
            <PostList {...article} key={article.id} />
          )
        }) : null}
      </InfiniteScroll>
    </LayoutListingPost>
  );
}

// eslint-disable-next-line @typescript-eslint/require-await -- It is ok
export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<TagProps | { notFound: boolean; }>> {
  const slug = context.params?.slug;

  if (!slug || !isStringArray(slug)) {
    return { notFound: true };
  }

  const tagID: string = slug[0];
  const tagName: string = slug[1];

  return {
    props: { tagID, tagName },
  };
}
