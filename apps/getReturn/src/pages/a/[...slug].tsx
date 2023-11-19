import type { ReactElement } from 'react';
import type { GetStaticPropsContext, GetServerSideProps } from 'next';
import { CrumbleMenu } from 'design-system/components/molecules/crumbleMenu';
import { LayoutPostView } from 'design-system/components/layout/layoutPostView';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import type { PostFull } from 'utils';
import { adapterArticleData } from '../../utils/adapters/adapterArticleData';
import { clientGetArticleQuery } from '../../gql';
import { footerConfig, headerMenuConfig, searchEngineConfig } from "../../config";

type ArticleProps = {
  slug?: string;
  articleData?: PostFull;
}

export default function Article({ articleData, slug }: ArticleProps): ReactElement {
  const seo = useSeoConfig({ title: articleData?.title, description: articleData?.lead, images: [{ url: articleData?.cover?.src }] });


  return (
    <LayoutPostView
      footer={footerConfig}
      headerMenu={headerMenuConfig}
      postViewData={articleData}
      searchEngineConfig={searchEngineConfig}
      seo={seo}
      topElement={<CrumbleMenu data={[{ title: "home", href: "/" }, { title: 'blog', href: '/blog' }, { title: articleData?.title || 'artykuł', href: slug || "/" }]}/>}
    />
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
    props: { articleData, slug: `/a/${params.slug[0]}/${params.slug[1]}` },
  };
}
