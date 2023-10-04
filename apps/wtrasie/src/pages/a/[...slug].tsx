import type { ReactElement } from 'react';
import type { GetServerSidePropsContext } from 'next';
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

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<{ props: ArticleProps }> {
  const slug = context.params?.slug;
  if (!Array.isArray(slug) || slug.length === 0) {
    throw new Error("Invalid slug");
  }

  const getId = parseInt(slug[0]);

  const { data: getArticleQuery } = await clientGetArticleQuery({ id: getId });
  const articleData = getArticleQuery ? adapterArticleData(getArticleQuery) : null;

  return {
    props: { articleData },
  };
}
