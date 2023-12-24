import type {ReactElement} from 'react';
import {LayoutFull} from 'design-system/components/layout/layoutFull';
import {useSeoConfig} from 'design-system/hooks/useSeoConfig';
import {footerConfig, headerMenuConfig, searchEngineConfig} from '../config';
import {SectionMediaCoverage} from '../components/template/section/sectionMediaCoverage';
import {SectionCustomerFaq} from '../components/template/section/sectionCustomerFaq';
import {NormalizedCacheObject} from "@apollo/client";
import {clientGetArticlesQuery, useGetArticlesQuery} from "../gql";
import {PostShort} from "utils";
import {adapterArticlesData} from "../utils/adapters";
import {LeadPostWithList} from "design-system/components/templates/section/leadPostWithList";
import {SectionWithCircle} from "design-system/components/templates/section/sectionWithCircle";

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
                    <video src="/video/samojlik.mp4" width="350px" style={{position: 'sticky', top: "8rem"}}
                           preload="auto" autoPlay loop playsInline>
                        <track kind="captions" src="/video/test.mp4" srcLang="pl" label="polish" default/>
                    </video>
                </div>
                <SectionWithCircle
                    inCircle="1"
                    header="Analiza"
                    color="var(--uxu-gradient-blue-tell)"
                >
                    <SectionCustomerFaq
                        header="Analiza umowy pod kątem sankcji darmowego kredytu"
                        description="Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej. Nasz proces analizy polega na bezpłatnym badaniu, dokonywanym przez prawników w ciągu 72 godzin, przesłanej umowy kredytowej, aby ustalić, czy przysługuje Ci zwrot w ramach sankcji darmowego kredytu."
                        collapse={[
                            {
                                header: "Ile kosztuje analiza umowy ?",
                                description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                            },
                            {
                                header: "Czy mogę mieć jakieś problemy z bankiem ?",
                                description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                            },
                            {
                                header: "Czy jest jakieś ryzyko ?",
                                description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                            }
                        ]}
                    />

                </SectionWithCircle>
                <SectionWithCircle
                    inCircle="2"
                    header="Dokumentacja"
                    color="var(--uxu-gradient-purple-pink)"
                >
                    <SectionCustomerFaq
                        header="Szykujemy dokumentację dla banku"
                        description="Po analizie umowy o sankcję darmowego kredytu, jeśli zlecasz sprawę naszym prawnikom, przygotowujemy dokumentację do banku o zwrot prowizji. Bank ma 30 dni na decyzję. W razie potrzeby dodatkowej interpretacji prawnej, zwracamy się do sądu. Po pozytywnej decyzji sądowej, bank wypłaca środki w ciągu 2 tygodni. W przypadku negatywnej, kończymy współpracę i informujemy o niemożności skorzystania z sankcji."
                        collapse={[
                            {
                                header: "Ile trwa cały proces ?",
                                description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                            },
                            {
                                header: "Kiedy dostanę pieniądze ?",
                                description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                            },
                            {
                                header: "Czy będę musiał chodzić po sądach ?",
                                description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                            }
                        ]}
                    />

                </SectionWithCircle>
                <SectionWithCircle
                    inCircle="3"
                    header="Wypłata"
                    color="var(--uxu-gradient-red-amber)"
                >
                    <SectionCustomerFaq
                        header="Wypłata środków"
                        description="Po otrzymaniu środków z banku, przelewamy na Twoje konto 50% kwoty zwróconej przez bank w ramach sankcji darmowego kredytu w ciągu tygodnia. Druga połowa to nasze wynagrodzenie za przygotowanie dokumentacji i pokrycie ryzyka związanego z kosztami sądowymi. Dodatkowo, 5% naszego zysku przekazujemy na wybrane przez Ciebie schronisko dla zwierząt po wypłacie środków."
                        collapse={[
                            {
                                header: "Co z moimi danymi po wypłacie środków ?",
                                description: "Sankcja darmowego kredytu, zgodnie z Art. 45. Kodeksu Cywilnego, umożliwia zwrot odsetek z umowy kredytowej."
                            },
                        ]}
                    />

                </SectionWithCircle>
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
