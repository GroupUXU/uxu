import type { ApolloQueryResult } from "@apollo/client";
import { initializeApollo } from '../../config/apolloClient/config.apolloClient';
import { GET_TAG, GET_TAGS_LIST } from '../query';
import type { GetTagQuery, GetTagsListQuery } from '../types';



export async function clientGetTagQuery(baseVariables: { idTag: number }): Promise<ApolloQueryResult<GetTagQuery>> {
  const options = { query: GET_TAG, variables: baseVariables };
  return initializeApollo().query<GetTagQuery>(options);
}

export async function clientGetTagListQuery(
  { page = 1, pageSize = 12 }: { page?: number; pageSize?: number }
): Promise<ApolloQueryResult<GetTagsListQuery>> {
  const options = { query: GET_TAGS_LIST, variables: { page, pageSize } };
  return initializeApollo().query<GetTagsListQuery>(options);
}

