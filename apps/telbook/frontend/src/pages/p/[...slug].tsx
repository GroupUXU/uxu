import type {ReactElement} from 'react';
import type {GetStaticPropsContext} from 'next';
import {adapterPhoneData, adapterCommentsData} from '../../utils/adapters';
import {
    clientGetPhoneQuery,
    clientGetCommentsQuery,
    useGetCommentsQuery,
    useGetPhoneQuery
} from '../../gql';
import {LayoutPhoneView} from 'design-system/components/layout/layoutPhoneView'
import {footerConfig, headerMenuConfig, searchEngineConfig} from "../../config";
import {CrumbleMenu} from "design-system/components/molecules/crumbleMenu";
import {useSeoConfig} from "design-system/hooks/useSeoConfig";


type PhoneProps = {
    id: string;
    phone: string;
    slug: string;
    initialApolloState?: unknown;
}

export default function Phone({slug, phone, id}: PhoneProps): ReactElement {
    const {data: getPhoneData} = useGetPhoneQuery({
        variables: {id},
        ssr: true
    });

    const {data: getCommentsData} = useGetCommentsQuery({
        variables: {
            pageSize: 12,
            page: 1,
            phone: ""
        },
        ssr: true
    });

    const comments = getCommentsData ? adapterCommentsData(getCommentsData) : [];
    const phoneData = adapterPhoneData(getPhoneData, getCommentsData);

    console.log(comments, 'comments')

    const seo = useSeoConfig({
        title: `${phone} czyj to numer telefonu ?`,
        description: phoneData.lead || undefined,
        url: phoneData.cover?.src || undefined
    });


    return (
        <LayoutPhoneView
            seo={seo}
            footer={footerConfig}
            headerMenu={headerMenuConfig}
            comments={comments}
            searchEngineConfig={searchEngineConfig}
            phoneData={phoneData}
            topElement={
                <CrumbleMenu data={[{title: "home", href: "/"}, {title: phoneData.phone || "", href: slug || "/"}]}/>
            }
        />
    );
}

export async function getServerSideProps(context: GetStaticPropsContext): Promise<{ notFound: boolean } | { props: PhoneProps }> {
    const {params} = context;

    if (!params || !Array.isArray(params.slug) || params.slug.length === 0) {
        return {notFound: true};
    }

    const id: string = params.slug[0];
    const phone: string = params.slug[1];

    const getCommentsData = await clientGetCommentsQuery({variables: {phone, pageSize: 12, page: 1}});
    const getPhoneQuery = await clientGetPhoneQuery({variables: {id}});


    if (getPhoneQuery.result.data.phone?.data?.attributes?.phone !== phone) {
        return {notFound: true};
    }

    return {
        props: {
            id: params.slug[0],
            phone: params.slug[1],
            slug: `/p/${params.slug[0]}/${params.slug[1]}`,
            initialApolloState: {...getCommentsData.apolloClient.extract(), ...getPhoneQuery.apolloClient.extract()}
        },
    };
}
