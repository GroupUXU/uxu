import type { ReactElement } from "react";
import type { GetStaticPropsContext, GetStaticPaths, GetStaticProps } from 'next';
import type { PostViewData } from 'design-system';
import { createSlug, useSeoConfig, LayoutPostView, PostView, AdPhoneClient, useSiteConfig } from 'design-system';
import { connectQueries } from '../../utils/function';
import { adapterArticleData, adapterArticlesSlugData } from '../../utils/adapters';
import type { GetArticlesQuery } from '../../gql';
import {
  clientGetArticleQuery,
  clientGetArticlesQuery,
  clientClientsWithTagsQuery
} from '../../gql';
import { FOOTER_CONFIG, HEADER_MENU_CONFIG, CONFIG_SEARCH_ENGINE } from "../../config";

type ServiceProps = {
  clientPhone?: string;
  articleData?: PostViewData;
};

export default function Service({ articleData, clientPhone }: ServiceProps): ReactElement {
  const seo = useSeoConfig({ title: articleData?.title, description: articleData?.lead, images: [{ url: articleData?.cover?.src }] });
  const { client} = useSiteConfig();
  const isMobile = client?.platform.isMobile || false;

 const adsWithPhoneClient = clientPhone && {
   tel: clientPhone,
   title: articleData?.title || "",
 }

  return (
    <LayoutPostView
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
      searchEngineConfig={CONFIG_SEARCH_ENGINE}
      seo={seo}
      siteBarLeft={<p>SiteBar left</p>}
      topElement={<AdPhoneClient {...adsWithPhoneClient} />}
    >
      {articleData ? <PostView postViewData={articleData}/> : null}
    </LayoutPostView>
  );
}

export async function getStaticPaths(): Promise<GetStaticPaths> {

  const { data} = await clientGetArticlesQuery({ variables: { pageSize: 25, page: 1, type: ['service']}});

  const connectedArticles: Array<GetArticlesQuery> = await connectQueries({
    functionQuery: clientGetArticlesQuery,
    variablesQuery: { variables: { pageSize: 25, type: ['service'] }},
    pageCount: data.articles?.meta.pagination.pageCount || 1
  });

  const articlesSlugData: Array<{ id: string, title: string, slug: string }> = connectedArticles.flatMap(adapterArticlesSlugData);


  return {
    // @ts-expect-error -- it is ok
    paths: articlesSlugData.map(article => ({ params: {slug: [article.id, createSlug( article.title )]} })),
    fallback: true,
  };
}

export async function getStaticProps (context: GetStaticPropsContext): Promise<GetStaticProps> {
  const { params } = context;

  if (!params || !Array.isArray(params.slug) || params.slug.length === 0) {
    // @ts-expect-error -- it is ok
    return { notFound: true };
  }

  const id: number = parseInt(params.slug[0]);

  const { data: getArticleQuery } = await clientGetArticleQuery({ variables: { id }});
  const articleData: PostViewData = adapterArticleData(getArticleQuery);

  const tagsId: Array<string> = articleData.tags.map(tag => tag.id);

  const { data: clientsData } = await clientClientsWithTagsQuery( { variables: { tagsId } });
  // @ts-expect-error -- it is ok
  const clientPhone = clientsData.clients?.data[0]?.attributes?.branches[0]?.phones[0]?.phone || null;


  return {
    // @ts-expect-error -- it is ok
    props: { articleData, clientPhone },
  };
}
