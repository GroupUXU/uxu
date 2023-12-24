import type {ReactElement} from 'react';
import {LayoutFull} from 'design-system/components/layout/layoutFull';
import {useSeoConfig} from 'design-system/hooks/useSeoConfig';
import {LeadPostWithList} from "design-system/components/templates/section/leadPostWithList";
import {SectionWithCircle} from "design-system/components/templates/section/sectionWithCircle";
import {footerConfig, headerMenuConfig, searchEngineConfig} from '../config';
import {SectionMediaCoverage} from '../components/template/section/sectionMediaCoverage';
import {SectionCustomerFaq} from '../components/template/section/sectionCustomerFaq';
import {NormalizedCacheObject} from "@apollo/client";
import {clientGetArticlesQuery, useGetArticlesQuery} from "../gql";
import {PostShort} from "utils";
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
                    <video src="/video/test.mp4" width="350px" style={{position: 'sticky', top: "8rem"}}
                           preload="auto" autoPlay loop playsInline>
                        <track kind="captions" src="/video/test.mp4" srcLang="pl" label="polish" default/>
                    </video>
                </div>
                {dataWhatItWorks.map((item) => {
                    return (
                        <SectionWithCircle
                            inCircle={item.inCircle}
                            header={item.header}
                            color={item.color}
                        >
                            <SectionCustomerFaq
                                header={item.sectionCustomerFaqData.header}
                                description={item.sectionCustomerFaqData.description}
                                collapse={item.sectionCustomerFaqData.collapse}
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
