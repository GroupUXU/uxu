import type { ApolloQueryResult } from "@apollo/client";
import { createApolloClient } from '../../config';
import { GET_CLIENTS_WITH_TAGS } from '../query';
import type { GetClientsWithTagsQuery } from "../types";

type ClientClientsWithTagsQueryProps = {
  variables: {
    tagsId: Array<string>;
  }
}

export async function clientClientsWithTagsQuery({ variables: { tagsId }}: ClientClientsWithTagsQueryProps): Promise<ApolloQueryResult<GetClientsWithTagsQuery>> {
  const options = { query: GET_CLIENTS_WITH_TAGS, variables: { tagsId } };
  return createApolloClient().query<GetClientsWithTagsQuery>(options);
}
