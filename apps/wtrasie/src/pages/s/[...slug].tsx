import type { ReactElement } from "react";
import type { GetStaticPropsContext, GetStaticPaths, GetStaticProps } from 'next';
import type { PostFull } from 'utils';
import { createSlug, PostShort } from 'utils';
import { AdPhoneClient } from 'design-system/components/molecules/adPhoneClient';
import { LayoutPostView } from 'design-system/components/layout/layoutPostView';
import { PostView } from 'design-system/components/templates/postView';
import { Tree, renderBranches } from 'design-system/components/molecules/tree';
import { StickyWrapper } from 'design-system/components/atoms/stickyWrapper';
import { CrumbleMenu } from 'design-system/components/molecules/crumbleMenu';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import { connectQueries } from '../../utils/function';
import { adapterArticleData, adapterArticlesData, adapterArticlesSlugData } from '../../utils/adapters';
import type { GetArticlesQuery } from '../../gql';
import {
  clientGetArticleQuery,
  clientGetArticlesQuery,
  clientClientsWithTagsQuery
} from '../../gql';
import { footerConfig, headerMenuConfig, siteBarMenuConfig, searchEngineConfig } from '../../config';

type ServiceProps = {
  slug?: string;
  clientPhone?: string;
  articleData?: PostFull;
};

export default function Service ( {articleData, clientPhone, slug }: ServiceProps ): ReactElement {
  const seo = useSeoConfig ( {
    title: articleData?.title,
    description: articleData?.lead,
    images: [{url: articleData?.cover?.src}]
  } );

  const adsWithPhoneClient = clientPhone && {
    tel: clientPhone,
    title: articleData?.title || "",
  }

  return (
    <LayoutPostView
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
      topElement={
        <>
          <AdPhoneClient {...adsWithPhoneClient} />
          <CrumbleMenu data={[{ title: "home", href: "/" }, { title: "usługi", href: "/s" }, { title: articleData?.title || "usługa", href: slug || "/" }]}/>
        </>
      }
    >
      {articleData ? <PostView postViewData={articleData}/> : null}
    </LayoutPostView>
  );
}

export async function getStaticPaths (): Promise<GetStaticPaths> {

  const {data} = await clientGetArticlesQuery ( {variables: {pageSize: 25, page: 1, type: ['service']}} );

  const connectedArticles: Array<GetArticlesQuery> = await connectQueries ( {
    functionQuery: clientGetArticlesQuery,
    variablesQuery: {variables: {pageSize: 25, type: ['service']}},
    pageCount: data.articles?.meta.pagination.pageCount || 1
  } );

  const articlesSlugData: Array<{
    id: string,
    title: string,
    slug: string
  }> = connectedArticles.flatMap ( adapterArticlesSlugData );


  return {
    // @ts-expect-error -- it is ok
    paths: articlesSlugData.map ( article => ({params: {slug: [article.id, createSlug ( article.title )]}}) ),
    fallback: true,
  };
}

export async function getStaticProps ( context: GetStaticPropsContext ): Promise<GetStaticProps> {
  const {params} = context;

  if ( !params || !Array.isArray ( params.slug ) || params.slug.length === 0 ) {
    // @ts-expect-error -- i
    // t is ok
    return { notFound: true };
  }

  const id: number = parseInt ( params.slug[ 0 ] );

  const {data: getArticleQuery} = await clientGetArticleQuery ( {variables: {id}} );
  const articleData: PostFull = adapterArticleData ( getArticleQuery );

  const tagsId: Array<string> = articleData.tags.map ( tag => tag.id );

  const {data: clientsData} = await clientClientsWithTagsQuery ( {variables: {tagsId}} );
  // @ts-expect-error -- it is ok
  const clientPhone = clientsData.clients?.data[ 0 ]?.attributes?.branches[ 0 ]?.phones[ 0 ]?.phone || null;


  return {
    // @ts-expect-error -- it is ok
    props: {articleData, clientPhone, slug: `/s/${params.slug[0]}/${params.slug[1]}` },
  };
}
