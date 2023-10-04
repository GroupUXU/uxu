import { APOLLO_CLIENT } from '../../config';
import { GET_CLIENTS_LIST_WITH_FILTRES_SHORTNAME } from '../query';
import type { GetClientsListWithFiltresShortNameQuery } from '../types';

export async function clientClientsListWithFiltresShortNameQuery(
  baseVariables: { shortname: Array<string> }
): Promise<ReturnType<typeof APOLLO_CLIENT.query>> {
  const options = { query: GET_CLIENTS_LIST_WITH_FILTRES_SHORTNAME, variables: baseVariables };
  return APOLLO_CLIENT.query<GetClientsListWithFiltresShortNameQuery>(options);
}
