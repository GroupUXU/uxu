import type { ReactElement } from "react";
import type { GetStaticPropsContext, GetStaticProps } from 'next';
import type { PostFull } from 'utils';
import { AdPhoneClient } from 'design-system/components/molecules/adPhoneClient';
import { LayoutPostView } from 'design-system/components/layout/layoutPostView';
import { CrumbleMenu } from 'design-system/components/molecules/crumbleMenu';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import { adapterArticleData } from '../../utils/adapters';
import {
  clientGetArticleQuery,
  clientClientsWithTagsQuery
} from '../../gql';
import { footerConfig, headerMenuConfig, searchEngineConfig } from '../../config';

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
      postViewData={articleData}
      searchEngineConfig={searchEngineConfig}
      seo={seo}
      topElement={
        <>
          <AdPhoneClient {...adsWithPhoneClient} />
          <CrumbleMenu data={[{ title: "home", href: "/" }, { title: "usługi", href: "/s" }, { title: articleData?.title || "usługa", href: slug || "/" }]}/>
        </>
      }
    />
  );
}

export async function getServerSideProps( context: GetStaticPropsContext ): Promise<GetStaticProps> {
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
