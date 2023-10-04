import type { GetArticlesQuery } from "../../../gql";

export type ArticleData =  NonNullable<NonNullable<NonNullable<GetArticlesQuery['articles']>['data']>[number]>;

export type Types = Array<string>;

export type List = Array<{ title?: string; id?: string, slug?: string }>;

export type GetDataTypes = List;
