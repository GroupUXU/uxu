import type {ReactElement} from 'react';
import type {GetStaticPropsContext, GetServerSideProps} from 'next';
import type {PhoneFull} from 'utils';
import {adapterPhoneData} from '../../utils/adapters';
import {clientGetPhoneQuery} from '../../gql';
import {LayoutPhoneView} from 'design-system/components/layout/layoutPhoneView'
import {footerConfig, headerMenuConfig, searchEngineConfig} from "../../config";
import {CrumbleMenu} from "design-system/components/molecules/crumbleMenu";
import {useSeoConfig} from "design-system/hooks/useSeoConfig";


type PhoneProps = {
  slug: string;
  phoneData: PhoneFull;
}

export default function Phone({phoneData, slug}: PhoneProps): ReactElement {
  const seo = useSeoConfig({ title: `${phoneData.phone} czyj to numer telefonu ?`, description: phoneData.lead || undefined, url: phoneData.cover?.src || undefined });
  
  
  return (
     <LayoutPhoneView
        seo={seo}
        footer={footerConfig}
        headerMenu={headerMenuConfig}
        searchEngineConfig={searchEngineConfig}
        phoneFullData={phoneData}
        topElement={
          <CrumbleMenu data={[{title: "home", href: "/"}, {title: phoneData.phone, href: slug || "/" }]}/>
        }
     />
  );
}

export async function getServerSideProps(context: GetStaticPropsContext): Promise<GetServerSideProps> {
  const {params} = context;
  
  if (!params || !Array.isArray(params.slug) || params.slug.length === 0) {
    // @ts-expect-error -- it is ok
    return {notFound: true};
  }
  
  const id: string = params.slug[0];
  
  
  const {data: getPhoneData} = await clientGetPhoneQuery({variables: {id}});
  const phoneData = adapterPhoneData(getPhoneData);
  
  return {
    // @ts-expect-error -- it is ok
    props: {phoneData, slug: `/p/${params.slug[0]}/${params.slug[1]}`},
  };
}
