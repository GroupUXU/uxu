import type { ReactElement } from 'react';
import type { GetStaticPropsContext, GetServerSideProps } from 'next';
import { LayoutPostView, PostView } from 'design-system';
import { useSeoConfig, useSiteConfig } from 'hooks';
import type { GetAdapterArticleData } from '../../utils/adapters/adapterArticleData/types';
import { adapterArticleData } from '../../utils/adapters/adapterArticleData';
import { clientGetArticleQuery } from '../../gql';
import { FOOTER_CONFIG, HEADER_MENU_CONFIG, CONFIG_SEARCH_ENGINE } from "../../config";

type ArticleProps = {
  articleData: GetAdapterArticleData | null;
}

export default function Article({ articleData }: ArticleProps): ReactElement {
  const seo = useSeoConfig({ title: articleData?.title, description: articleData?.lead, images: [{ url: articleData?.cover?.src }] });
  const { client} = useSiteConfig();
  const isMobile = client?.platform.isMobile || false;

  return (
    <LayoutPostView
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
      searchEngineConfig={CONFIG_SEARCH_ENGINE}
      seo={seo}
      siteBarLeft={<p>left</p>}
    >
      {articleData ? <PostView postViewData={articleData}/> : null}
    </LayoutPostView>
  );
}

export async function getServerSideProps(context: GetStaticPropsContext): Promise<GetServerSideProps> {
  const { params } = context;

  if (!params || !Array.isArray(params.slug) || params.slug.length === 0) {
    // @ts-expect-error -- it is ok
    return { notFound: true };
  }

  const id: number = parseInt(params.slug[0]);

  const { data: getArticleQuery } = await clientGetArticleQuery({ variables: { id } });
  const articleData = adapterArticleData(getArticleQuery);

  return {
    // @ts-expect-error -- it is ok
    props: { articleData },
  };
}
