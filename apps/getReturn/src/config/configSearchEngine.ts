import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import type { SearchEngineConfig, SearchSuggestionsArrayEngineInModal } from "design-system";


export const SEARCH_ENGINE_CONFIG_IN_MODAL:SearchEngineConfig<SearchSuggestionsArrayEngineInModal> = {
   searchClientData: instantMeiliSearch (
     'https://ms-f01677209658-5386.fra.meilisearch.io',
     'bacfe132b4eb1d5cb34b6ce0671fcb659a404b417cc69efb9b3be374a6ced9ef'
   ),
   indexName: 'article',
   defaultSugestions: [
     {
       slug: "Uslugi",
       title: "Przewodnik po nowych funkcjach",
       lead: "Jak zorganizować swoje miejsce pracy",
       type: "post"
     },
     {
       slug: "jak-zorganizowac-swoje-miejsce-pracy",
       title: "Jak zorganizować swoje miejsce pracy",
       lead: "Jak zorganizować swoje miejsce pracy",
       type: "page"
     },
     {
       slug: "10-przepisow-na-szybki-obiad",
       title: "10 przepisów na szybki obiad",
       lead: "Jak zorganizować swoje miejsce pracy",
       type: "post"
     },
     {
       slug: "najlepsze-miejsca-na-weekendowy-wypoczynek",
       title: "Najlepsze miejsca na weekendowy wypoczynek",
       type: "page"
     },
     {
       slug: "kreatywne-hobby-do-wyprobowania",
       title: "Kreatywne hobby do wypróbowania",
       type: "post"
     },
     {
       slug: "jak-zrobic-wlasciwy-wybor-karierowy",
       title: "Jak zrobić właściwy wybór karierowy",
       type: "page"
     },
     {
       slug: "przewodnik-po-nowych-funkcjach",
       title: "Przewodnik po nowych funkcjach",
       type: "post"
     },
     {
       slug: "jak-zorganizowac-swoje-miejsce-pracy",
       title: "Jak zorganizować swoje miejsce pracy",
       type: "page"
     },
     {
       slug: "10-przepisow-na-szybki-obiad",
       title: "10 przepisów na szybki obiad",
       type: "post"
     },
     {
       slug: "najlepsze-miejsca-na-weekendowy-wypoczynek",
       title: "Najlepsze miejsca na weekendowy wypoczynek",
       type: "page"
     },
     {
       slug: "kreatywne-hobby-do-wyprobowania",
       title: "Kreatywne hobby do wypróbowania",
       type: "post"
     },
     {
       slug: "jak-zrobic-wlasciwy-wybor-karierowy",
       title: "Jak zrobić właściwy wybór karierowy",
       type: "page"
     },
     {
       slug: "przewodnik-po-nowych-funkcjach",
       title: "Przewodnik po nowych funkcjach",
       type: "post"
     },
     {
       slug: "jak-zorganizowac-swoje-miejsce-pracy",
       title: "Jak zorganizować swoje miejsce pracy",
       type: "page"
     },
     {
       slug: "10-przepisow-na-szybki-obiad",
       title: "10 przepisów na szybki obiad",
       type: "post"
     },
     {
       slug: "najlepsze-miejsca-na-weekendowy-wypoczynek",
       title: "Najlepsze miejsca na weekendowy wypoczynek",
       type: "page"
     },
     {
       slug: "kreatywne-hobby-do-wyprobowania",
       title: "Kreatywne hobby do wypróbowania",
       type: "post"
     },
     {
       slug: "jak-zrobic-wlasciwy-wybor-karierowy",
       title: "Jak zrobić właściwy wybór karierowy",
       type: "page"
     }
   ]
};
