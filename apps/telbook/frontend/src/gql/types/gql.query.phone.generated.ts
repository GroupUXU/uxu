import * as Types from './api-gateway.service.generated';

import { gql } from '@apollo/client';
import { FragmentDataLeadFragmentDoc } from './gql.fragment.lead.generated';
import { FragmentDataViewsFragmentDoc } from './gql.fragment.views.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPhoneQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  page: Types.Scalars['Int']['input'];
  pageSize: Types.Scalars['Int']['input'];
}>;


export type GetPhoneQuery = { __typename?: 'Query', phone?: { __typename?: 'PhoneEntityResponse', data?: { __typename?: 'PhoneEntity', id?: string | null, attributes?: { __typename?: 'Phone', phone: string, network?: Types.Enum_Phone_Network | null, typ?: Types.Enum_Phone_Typ | null, updatedAt?: any | null, createdAt?: any | null, ratings?: any | null, tags?: { __typename: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', title: string } | null }> } | null, cover: { __typename: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, alternativeText?: string | null, formats?: any | null } | null } | null }, lead: { __typename: 'ComponentContentPartsLead', id: string, lead: string }, views: Array<{ __typename: 'ComponentStatsViews', id: string, views: number, date?: any | null } | { __typename?: 'Error' } | null>, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', message?: string | null, reputation: Types.Enum_Comment_Reputation, createdAt?: any | null, updatedAt?: any | null, phone?: { __typename?: 'PhoneEntityResponse', data?: { __typename?: 'PhoneEntity', id?: string | null, attributes?: { __typename?: 'Phone', phone: string } | null } | null } | null } | null }> } | null } | null } | null } | null };


export const GetPhoneDocument = gql`
    query GetPhone($id: ID, $page: Int!, $pageSize: Int!) {
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
        tags {
          __typename
          data {
            id
            attributes {
              title
            }
          }
        }
        cover {
          __typename
          data {
            id
            attributes {
              url
              caption
              alternativeText
              formats
            }
          }
        }
        lead {
          ...FragmentDataLead
        }
        views {
          ...FragmentDataViews
        }
        comments(
          pagination: {page: $page, pageSize: $pageSize}
          sort: ["createdAt:asc"]
        ) {
          data {
            id
            attributes {
              message
              reputation
              createdAt
              updatedAt
              phone {
                data {
                  id
                  attributes {
                    phone
                  }
                }
              }
            }
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
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetPhoneQuery(baseOptions: Apollo.QueryHookOptions<GetPhoneQuery, GetPhoneQueryVariables>) {
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