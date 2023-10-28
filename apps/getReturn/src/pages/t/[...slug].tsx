import type { ReactElement } from 'react';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { LayoutListingPost, SectionInfiniteScroll, PostList } from 'design-system';
import { useSeoConfig, useSiteConfig } from 'hooks';
import { useGetArticlesWithTagQuery } from '../../gql';
import { adapterArticlesData } from '../../utils/adapters/adapterArticlesData';
import { FOOTER_CONFIG, HEADER_MENU_CONFIG, CONFIG_SEARCH_ENGINE } from "../../config";

type TagProps = {
  tagID: string;
  tagName: string;
}

function isStringArray(value: unknown): boolean {
  return Array.isArray(value) && value.every(item => typeof item === 'string');
}

export default function Tag({ tagID , tagName }: TagProps ): ReactElement {
  const { config: { client } } = useSiteConfig();
  const isMobile = client?.platform.isMobile || false;
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
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
      searchEngineConfig={CONFIG_SEARCH_ENGINE}
      seo={seo}
      siteBarLeft={<p>left</p>}
      siteBarRight={<p>right</p>}
    >
      <SectionInfiniteScroll
        onScrollEnd={handleScrollEnd}
        page={1}
        pageCount={data?.articles?.meta.pagination.pageCount || 1}
      >
        {data ? adapterArticlesData(data, "small").map((article, index) => {
          return (
            <PostList {...article} key={article.id || index} />
          )
        }) : null}
      </SectionInfiniteScroll>
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
