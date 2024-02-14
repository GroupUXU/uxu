import * as Types from './api-gateway.service.generated';

import { gql } from '@apollo/client';
import { FragmentDataAdressFragmentDoc } from './gql.fragment.adress.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetClientsWithTagsQueryVariables = Types.Exact<{
  tagsId: Array<Types.InputMaybe<Types.Scalars['ID']['input']>> | Types.InputMaybe<Types.Scalars['ID']['input']>;
}>;


export type GetClientsWithTagsQuery = { __typename?: 'Query', clients?: { __typename?: 'ClientEntityResponseCollection', data: Array<{ __typename?: 'ClientEntity', id?: string | null, attributes?: { __typename?: 'Client', branches?: Array<{ __typename?: 'ComponentOthersAdress', phones?: Array<{ __typename: 'ComponentOthersPhone', id: string, phone: string } | null> | null } | null> | null } | null }> } | null };


export const GetClientsWithTagsDocument = gql`
    query getClientsWithTags($tagsId: [ID]!) {
  clients(filters: {branches: {shortname: {id: {in: $tagsId}}}}) {
    data {
      id
      attributes {
        branches {
          ...FragmentDataAdress
        }
      }
    }
  }
}
    ${FragmentDataAdressFragmentDoc}`;

/**
 * __useGetClientsWithTagsQuery__
 *
 * To run a query within a React component, call `useGetClientsWithTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientsWithTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientsWithTagsQuery({
 *   variables: {
 *      tagsId: // value for 'tagsId'
 *   },
 * });
 */
export function useGetClientsWithTagsQuery(baseOptions: Apollo.QueryHookOptions<GetClientsWithTagsQuery, GetClientsWithTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientsWithTagsQuery, GetClientsWithTagsQueryVariables>(GetClientsWithTagsDocument, options);
      }
export function useGetClientsWithTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientsWithTagsQuery, GetClientsWithTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientsWithTagsQuery, GetClientsWithTagsQueryVariables>(GetClientsWithTagsDocument, options);
        }
export function useGetClientsWithTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetClientsWithTagsQuery, GetClientsWithTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientsWithTagsQuery, GetClientsWithTagsQueryVariables>(GetClientsWithTagsDocument, options);
        }
export type GetClientsWithTagsQueryHookResult = ReturnType<typeof useGetClientsWithTagsQuery>;
export type GetClientsWithTagsLazyQueryHookResult = ReturnType<typeof useGetClientsWithTagsLazyQuery>;
export type GetClientsWithTagsSuspenseQueryHookResult = ReturnType<typeof useGetClientsWithTagsSuspenseQuery>;
export type GetClientsWithTagsQueryResult = Apollo.QueryResult<GetClientsWithTagsQuery, GetClientsWithTagsQueryVariables>;