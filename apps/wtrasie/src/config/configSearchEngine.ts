import type { SearchEngineConfig , SearchSuggestionsArrayEngineInModal } from "design-system";
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';


export const SEARCH_ENGINE_CONFIG_IN_MODAL: SearchEngineConfig<SearchSuggestionsArrayEngineInModal> = {
   searchClientData: instantMeiliSearch (
     'https://ms-8b35a48a0214-5386.sfo.meilisearch.io',
     'a1e9e8a3d6a335d4ba355f4fbc43b9817ac15f9a44aa37f4ba76b55b73b08c30'
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
