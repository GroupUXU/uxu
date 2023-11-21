import type { ApolloQueryResult } from '@apollo/client';

type FunctionQuery<T> = (variables: unknown) => Promise<ApolloQueryResult<T>>;


type Props<T, V> = {
  functionQuery: FunctionQuery<T>;
  variablesQuery: V;
  pageCount: number
}

export async function connectQueries<T, V>( {functionQuery, variablesQuery, pageCount}: Props<T, V>): Promise<Array<T>> {
  return Promise.all(new Array(pageCount).fill(null).map(async (_, index) => {
    const query = await functionQuery ( {...variablesQuery, page: index + 1 } );
    return query.data
  }))
}
