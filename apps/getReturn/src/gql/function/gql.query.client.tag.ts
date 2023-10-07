import { APOLLO_CLIENT } from '../../config';
import { GET_TAG, GET_TAGS_LIST } from '../query';
import type { GetTagQuery, GetTagsListQuery } from '../types';


export async function clientGetTagQuery(baseVariables: { idTag: number }): Promise<ReturnType<typeof APOLLO_CLIENT.query>> {
  const options = { query: GET_TAG, variables: baseVariables };
  return APOLLO_CLIENT.query<GetTagQuery>(options);
}

export async function clientGetTagListQuery(
  { page = 1, pageSize = 12 }: { page?: number; pageSize?: number }
): Promise<ReturnType<typeof APOLLO_CLIENT.query>> {
  const options = { query: GET_TAGS_LIST, variables: { page, pageSize } };
  return APOLLO_CLIENT.query<GetTagsListQuery>(options);
}

