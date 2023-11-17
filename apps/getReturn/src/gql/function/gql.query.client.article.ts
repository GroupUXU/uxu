import type { ApolloQueryResult } from "@apollo/client";
import { createApolloClient } from '../../config/apolloClient/config.apolloClient';
import { GET_ARICLE, GET_ARICLES } from '../query';
import type { GetArticleQuery, GetArticlesQuery } from '../types';

type ClientGetArticlesQueryProps = {
  variables: {
    pageSize?: number;
    page?: number;
    type?: Array<"article" | "service">
  }
}

export async function clientGetArticlesQuery({ variables: { pageSize = 10, page = 1, type = ['article', 'service'] }}: ClientGetArticlesQueryProps): Promise<ApolloQueryResult<GetArticlesQuery>> {
  const options = {query: GET_ARICLES, variables: { pageSize, page, type }};
  return createApolloClient().query<GetArticlesQuery>( options );
}


type ClientGetArticleQueryProps = {
  variables: {
    id: number;
  }
}

export async function clientGetArticleQuery ({ variables: { id }}: ClientGetArticleQueryProps): Promise<ApolloQueryResult<GetArticleQuery>> {
  const options = {query: GET_ARICLE, variables: { id }};
  return createApolloClient().query<GetArticleQuery> ( options );
}
