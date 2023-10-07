import type { ReactElement } from 'react';
import type { GetStaticPropsContext, GetServerSideProps } from 'next';
import { LayoutPostView, PostView, useSeoConfig } from 'design-system';
import type { GetAdapterArticleData } from '../../utils/adapters/adapterArticleData/types';
import { adapterArticleData } from '../../utils/adapters/adapterArticleData';
import { clientGetArticleQuery } from '../../gql';
import { defaultSuggestions } from "../../config";
import { useSearch } from "../../hooks";


type ArticleProps = {
  articleData: GetAdapterArticleData | null;
}

export default function Article({ articleData }: ArticleProps): ReactElement {
  const onSearchQuery = useSearch();
  const seo = useSeoConfig({ title: articleData?.title, description: articleData?.lead, images: [{ url: articleData?.cover?.src }] });

  return (
    <LayoutPostView
      footer={{ brand: "wTrasie", footerColumns: [] }}
      searchEngine={{ defaultSuggestions, onSearchQuery }}
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
