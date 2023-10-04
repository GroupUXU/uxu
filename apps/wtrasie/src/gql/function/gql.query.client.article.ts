import type { ApolloQueryResult } from "@apollo/client";
import { APOLLO_CLIENT } from '../../config';
import { GET_ARICLE, GET_ARICLES } from '../query';
import type { GetArticleQuery, GetArticlesQuery } from '../types';

export async function clientGetArticlesQuery(baseVariables: {
  pageSize: number;
  page: number;
  type: Array<"article" | "service">
}): Promise<ApolloQueryResult<GetArticleQuery>> {
  const options = {query: GET_ARICLES, variables: baseVariables};

  return APOLLO_CLIENT.query<GetArticlesQuery>(options);
}

export async function clientGetArticleQuery(baseVariables: { id: number }): Promise<ReturnType<typeof APOLLO_CLIENT.query>> {
  const options = { query: GET_ARICLE, variables: baseVariables };

  return APOLLO_CLIENT.query<GetArticleQuery>(options);
}
