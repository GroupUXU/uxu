import type { ApolloClient, ApolloQueryResult, NormalizedCacheObject } from "@apollo/client";
import { initializeApollo } from '../../config';
import { GET_COMMENTS } from '../query';
import type { GetCommentsQuery } from '../types';

type ClientGetCommentsQueryProps = {
  variables: {
    phone?: string;
    pageSize?: number;
    page?: number;
  }
}

export async function clientGetCommentsQuery({ variables: { phone = "", pageSize = 12, page = 1 }}: ClientGetCommentsQueryProps): Promise<{ apolloClient:  ApolloClient<NormalizedCacheObject>, result: ApolloQueryResult<GetCommentsQuery> }> {
  const options = {query: GET_COMMENTS, variables: { phone, pageSize, page }};
  const apolloClient = initializeApollo()
  const result = await apolloClient.query<GetCommentsQuery>(options)
  return { apolloClient, result }
}