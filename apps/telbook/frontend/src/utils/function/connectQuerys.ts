import type { ApolloClient, NormalizedCacheObject, ApolloQueryResult } from "@apollo/client";

type FunctionQuery<T> = (variables: unknown) => Promise<{ apolloClient:  ApolloClient<NormalizedCacheObject>, result: ApolloQueryResult<T> }>;


type Props<T, V> = {
  functionQuery: FunctionQuery<T>;
  variablesQuery: V;
  pageCount: number
}

export async function connectQueries<T, V>( {functionQuery, variablesQuery, pageCount}: Props<T, V>): Promise<Array<T>> {
  return Promise.all(new Array(pageCount).fill(null).map(async (_, index) => {
    const { result } = await functionQuery ( {...variablesQuery, page: index + 1 } );
    return result.data
  }))
}
