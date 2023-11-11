import type { ReactElement } from 'react';
import type { GetStaticPropsContext, GetServerSideProps } from 'next';
import {
  CrumbleMenu,
  LayoutPostView,
  PostView,
  renderBranches,
  StickyWrapper,
  Tree
} from 'design-system';
import { useSeoConfig } from 'hooks';
import type { GetAdapterArticleData } from '../../utils/adapters/adapterArticleData/types';
import { adapterArticleData } from '../../utils/adapters/adapterArticleData';
import { clientGetArticleQuery } from '../../gql';
import { footerConfig, headerMenuConfig, siteBarMenuConfig, searchEngineConfig } from '../../config';


type ArticleProps = {
  slug?: string;
  articleData: GetAdapterArticleData | null;
}

export default function Article({ articleData, slug }: ArticleProps): ReactElement {
  const seo = useSeoConfig({ title: articleData?.title, description: articleData?.lead, images: [{ url: articleData?.cover?.src }] });

  return (
    <LayoutPostView
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
        <CrumbleMenu data={[{title: "home", href: "/"}, {title: articleData?.title || "artykuł", href: slug || "/" }]}/>
      }
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
    props: { articleData, slug: `/a/${params.slug[0]}/${params.slug[1]}` },
  };
}
