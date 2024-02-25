import type {ReactElement} from 'react';
import type {NormalizedCacheObject} from "@apollo/client";
import type {PostShort, Comment} from "utils";
import {LayoutFull} from 'design-system/components/layout/layoutFull';
import {useSeoConfig} from 'design-system/hooks/useSeoConfig';
import {LeadPostWithList} from "design-system/components/templates/section/leadPostWithList";
import {footerConfig, headerMenuConfig, searchEngineConfig} from '../config';
import {clientGetArticlesQuery, useGetArticlesQuery, clientGetCommentsQuery, useGetCommentsQuery} from "../gql";
import {adapterArticlesData, adapterCommentsData} from "../utils/adapters";
import {SectionSearch, SectionEmpty, SectionCommentsList} from "../components";

function Index(): ReactElement {
    const seo = useSeoConfig({});

    const {data: getArticlesData} = useGetArticlesQuery({
        variables: {
            pageSize: 12,
            page: 1,
            type: ['article']
        },
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

    const articlesCopy: Array<PostShort> = getArticlesData?.articles?.data ? adapterArticlesData(getArticlesData, "medium") : [];
    const leadPostWithListData: Array<PostShort> = articlesCopy.slice(0, 5);
    const comments: Array<Comment> = getCommentsData?.comments?.data ? adapterCommentsData(getCommentsData) : [];

    return (
        <LayoutFull
            footer={footerConfig}
            headerMenu={headerMenuConfig}
            searchEngineConfig={searchEngineConfig}
            seo={seo}
        >
            <SectionSearch/>
            <h4 className="headerSection">OSTATNIO KOMENTOWANE</h4>
            <SectionCommentsList data={comments} />
            <h4 className="headerSection">OSTATNIO NA BLOGU</h4>
            <LeadPostWithList posts={leadPostWithListData}/>
            <h4 className="headerSection">CZYM JEST TELBOOK.INFO?</h4>
            <SectionEmpty>
                <p>Platforma <strong>Telbook</strong> to kluczowy gracz na polskim rynku w dziedzinie identyfikacji
                    nieznanych połączeń
                    telefonicznych. Oferuje szybkie i skuteczne rozwiązanie pozwalające rozpoznać numer dzwoniącego w
                    ciągu kilku
                    sekund. Od momentu swojego debiutu w 2024 roku, <strong>Telbook</strong> stał się niezastąpionym
                    narzędziem dla osób chcących
                    ustrzec się przed niechcianymi rozmowami od telemarketerów, ankieterów, czy innych niepożądanych
                    dzwoniących.</p>
                <p>Dzięki funkcjonalnościom przypominającym tradycyjną książkę telefoniczną, ale dostępną w formacie
                    online,
                    serwis pozwala na błyskawiczne i bezproblemowe zidentyfikowanie dzwoniącego bez potrzeby
                    przeszukiwania
                    internetu. Użytkownicy mają możliwość weryfikacji numerów komórkowych, stacjonarnych oraz
                    międzynarodowych.
                    Dodatkowo, platforma udostępnia informacje dotyczące usług SMS Premium.</p>
                <p>Co więcej, <strong>Telbook</strong> zgromadził obszerną bazę danych, zapewniając swoim użytkownikom
                    dostęp
                    do szerokiego
                    zakresu informacji w jednym miejscu. Dzięki temu, nieznane numery telefonów już nie stanowią powodu
                    do
                    zmartwień. Serwis oferuje wiedzę na temat praktycznie każdego numeru.</p>
                <p>Warto podkreślić, że korzystanie z serwisu, w tym wyszukiwanie numerów telefonów oraz dostęp do
                    zawartych na
                    stronie informacji, jest całkowicie bezpłatne dla wszystkich
                    użytkowników. <strong>Telbook</strong> nie
                    wymaga zakładania
                    konta, co zapewnia łatwy i szybki dostęp do potrzebnych danych dla każdego, kto chce dowiedzieć się,
                    kto
                    próbował się z nim skontaktować.</p>
                <p>Na stronie głównej znajduje się lista ostatnich połączeń oraz komentarzy, co umożliwia bieżące
                    śledzenie
                    aktywności numerów. Wyszukiwarka numerów telefonów jest niezwykle intuicyjna - wystarczy wprowadzić
                    numer, by
                    niemal natychmiast odkryć tożsamość dzwoniącego.</p>
            </SectionEmpty>
        </LayoutFull>
    );
};

export async function getServerSideProps(): Promise<{ props: { initialApolloState: NormalizedCacheObject } }> {

    const resultGetArticlesQuery = await clientGetArticlesQuery({
        variables: {
            pageSize: 12,
            page: 1
        }
    });

    const resultGetCommentsQuery = await clientGetCommentsQuery({
        variables: {
            phone: "",
            pageSize: 12,
            page: 1
        }
    });

    return {props: {initialApolloState: {...resultGetArticlesQuery.apolloClient.extract(), ...resultGetCommentsQuery.apolloClient.extract()}}};
}

export default Index;
