import * as Types from './api-gateway.service.generated';

import { gql } from '@apollo/client';
import { FragmentDataLeadFragmentDoc } from './gql.fragment.lead.generated';
import { FragmentDataViewsFragmentDoc } from './gql.fragment.views.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPhoneQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
}>;


export type GetPhoneQuery = { __typename?: 'Query', phone?: { __typename?: 'PhoneEntityResponse', data?: { __typename?: 'PhoneEntity', id?: string | null, attributes?: { __typename?: 'Phone', phone: string, network?: Types.Enum_Phone_Network | null, typ?: Types.Enum_Phone_Typ | null, updatedAt?: any | null, createdAt?: any | null, ratings?: any | null, lead: { __typename: 'ComponentContentPartsLead', id: string, lead: string }, views: Array<{ __typename: 'ComponentStatsViews', id: string, views: number, date?: any | null } | { __typename?: 'Error' } | null>, format: Array<{ __typename?: 'ComponentOthersFormat', id: string, format: string } | { __typename?: 'Error' } | null> } | null } | null } | null };


export const GetPhoneDocument = gql`
    query GetPhone($id: ID) {
  phone(id: $id) {
    data {
      id
      attributes {
        phone
        network
        typ
        updatedAt
        createdAt
        ratings
        lead {
          ...FragmentDataLead
        }
        views {
          ...FragmentDataViews
        }
        format {
          ... on ComponentOthersFormat {
            id
            format
          }
        }
      }
    }
  }
}
    ${FragmentDataLeadFragmentDoc}
${FragmentDataViewsFragmentDoc}`;

/**
 * __useGetPhoneQuery__
 *
 * To run a query within a React component, call `useGetPhoneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhoneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhoneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPhoneQuery(baseOptions?: Apollo.QueryHookOptions<GetPhoneQuery, GetPhoneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhoneQuery, GetPhoneQueryVariables>(GetPhoneDocument, options);
      }
export function useGetPhoneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhoneQuery, GetPhoneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhoneQuery, GetPhoneQueryVariables>(GetPhoneDocument, options);
        }
export type GetPhoneQueryHookResult = ReturnType<typeof useGetPhoneQuery>;
export type GetPhoneLazyQueryHookResult = ReturnType<typeof useGetPhoneLazyQuery>;
export type GetPhoneQueryResult = Apollo.QueryResult<GetPhoneQuery, GetPhoneQueryVariables>;