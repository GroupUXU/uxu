import type {ReactElement} from 'react';
import type {NormalizedCacheObject} from "@apollo/client";
import type {PostShort} from "utils";
import {LayoutFull} from 'design-system/components/layout/layoutFull';
import {useSeoConfig} from 'design-system/hooks/useSeoConfig';
import {LeadPostWithList} from "design-system/components/templates/section/leadPostWithList";
import {SectionWithCircle} from "design-system/components/templates/section/sectionWithCircle";
import {footerConfig, headerMenuConfig, searchEngineConfig} from '../config';
import {SectionMediaCoverage} from '../components/template/section/sectionMediaCoverage';
import {SectionCustomerFaq} from '../components/template/section/sectionCustomerFaq';
import {clientGetArticlesQuery, useGetArticlesQuery} from "../gql";
import {adapterArticlesData} from "../utils/adapters";
import {dataWhatItWorks} from "../consts";

function Index(): ReactElement {
    const seo = useSeoConfig({});

    const {data} = useGetArticlesQuery({
        variables: {
            pageSize: 12,
            page: 1,
            type: ['article']
        },
        ssr: true
    });

    const articlesCopy: Array<PostShort> = data?.articles?.data ? adapterArticlesData(data, "medium") : [];
    const leadPostWithListData: Array<PostShort> = articlesCopy.slice(0, 5);

    return (
        <LayoutFull
            footer={footerConfig}
            headerMenu={headerMenuConfig}
            searchEngineConfig={searchEngineConfig}
            seo={seo}
        >
            <SectionMediaCoverage/>
            <h4 className="headerSection">JAK TO DZIAŁA ?</h4>
            <div style={{position: "relative"}}>
                <div style={{position: "absolute", right: 0, height: "100%", paddingTop: "35rem"}}>
                    <video
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                        src="/video/test.mp4"
                        style={{position: 'sticky', top: "8rem"}}
                        width="350px"
                        >
                        <track default kind="captions"  label="polish" src="/video/test.mp4" srcLang="pl"/>
                    </video>
                </div>
                {dataWhatItWorks.map(item => {
                    return (
                        <SectionWithCircle
                            color={item.color}
                            header={item.header}
                            inCircle={item.inCircle}
                            key={item.header}
                        >
                            <SectionCustomerFaq
                                collapse={item.sectionCustomerFaqData.collapse}
                                description={item.sectionCustomerFaqData.description}
                                header={item.sectionCustomerFaqData.header}
                            />
                        </SectionWithCircle>
                    )
                })}
            </div>
            <LeadPostWithList posts={leadPostWithListData}/>
        </LayoutFull>
    );
};

export async function getServerSideProps(): Promise<{ props: { initialApolloState: NormalizedCacheObject } }> {
    const {apolloClient} = await clientGetArticlesQuery({variables: {pageSize: 12, page: 1}})
    return {
        props: {
            initialApolloState: apolloClient.extract()
        },
    };
}

export default Index;
