import type { ApolloClient, ApolloQueryResult, NormalizedCacheObject } from "@apollo/client";
import { initializeApollo } from '../../config';
import { GET_ARICLE, GET_ARICLES } from '../query';
import type { GetArticleQuery, GetArticlesQuery } from '../types';

type ClientGetArticlesQueryProps = {
  variables: {
    pageSize?: number;
    page?: number;
    type?: Array<"article" | "service">
  }
}

export async function clientGetArticlesQuery({ variables: { pageSize = 10, page = 1, type = ['article', 'service'] }}: ClientGetArticlesQueryProps): Promise<{ apolloClient:  ApolloClient<NormalizedCacheObject>, result: ApolloQueryResult<GetArticlesQuery> }> {
  const options = {query: GET_ARICLES, variables: { pageSize, page, type }};
  const apolloClient = initializeApollo()
  const result = await apolloClient.query<GetArticlesQuery>(options)
  return { apolloClient, result }
}


type ClientGetArticleQueryProps = {
  variables: {
    id: number;
  }
}

export async function clientGetArticleQuery ({ variables: { id }}: ClientGetArticleQueryProps): Promise<ApolloQueryResult<GetArticleQuery>> {
  const options = {query: GET_ARICLE, variables: { id }};
  return initializeApollo().query<GetArticleQuery> ( options );
}
