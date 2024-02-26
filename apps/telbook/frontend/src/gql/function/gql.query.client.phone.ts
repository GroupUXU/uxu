import type {ApolloClient, ApolloQueryResult, NormalizedCacheObject} from "@apollo/client";
import {initializeApollo} from '../../config';
import {GET_PHONE} from '../query';
import type {GetCommentsQuery, GetPhoneQuery} from '../types';

type ClientGetPhoneQueryProps = {
  variables: {
    id: string;
    page?: number;
    pageSize?: number;
  }
}

export async function clientGetPhoneQuery ({ variables: { id, pageSize = 12, page = 1 }}: ClientGetPhoneQueryProps): Promise<{ apolloClient:  ApolloClient<NormalizedCacheObject>, result: ApolloQueryResult<GetPhoneQuery> }> {
  const options = {query: GET_PHONE, variables: { id, pageSize, page }};
  const apolloClient = initializeApollo();
  const result = await apolloClient.query<GetCommentsQuery>(options)
  return { apolloClient, result }
}
