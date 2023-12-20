import type { ReactElement } from 'react';
import { LayoutFull } from 'design-system/components/layout/layoutFull';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import { footerConfig, headerMenuConfig, searchEngineConfig } from '../config';
import { SectionMediaCoverage } from '../components/template/section/sectionMediaCoverage';
import {NormalizedCacheObject} from "@apollo/client";
import {clientGetArticlesQuery, useGetArticlesQuery} from "../gql";
import {PostShort} from "utils";
import {adapterArticlesData} from "../utils/adapters";
import {LeadPostWithList} from "design-system/components/templates/section/leadPostWithList";

function Index(): ReactElement {
    const seo = useSeoConfig({});

    const { data } = useGetArticlesQuery({
        variables: {
            pageSize: 12,
            page: 1,
            type: ['article']
        },
        ssr: true
    });

    const articlesCopy: Array<PostShort> = data?.articles?.data ? adapterArticlesData(data, "medium") : [];
    const leadPostWithListData: Array<PostShort> = articlesCopy.slice ( 0, 5 );

    return (
        <LayoutFull
            footer={footerConfig}
            headerMenu={headerMenuConfig}
            searchEngineConfig={searchEngineConfig}
            seo={seo}
        >
           <SectionMediaCoverage />
            <h4 className="headerSection">NA BLOGU</h4>
            <LeadPostWithList posts={leadPostWithListData}/>

        </LayoutFull>
    );
};

export async function getServerSideProps(): Promise<{props: { initialApolloState: NormalizedCacheObject }}> {
    const { apolloClient } = await clientGetArticlesQuery({ variables: { pageSize: 12, page: 1 }})
    return {
        props: {
            initialApolloState: apolloClient.extract()
        },
    };
}

export default Index;
