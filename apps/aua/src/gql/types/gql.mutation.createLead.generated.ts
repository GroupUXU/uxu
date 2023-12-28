import * as Types from './api-gateway.service.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddLeadMutationVariables = Types.Exact<{
  data: Types.LeadInput;
}>;


export type AddLeadMutation = { __typename?: 'Mutation', createLead?: { __typename?: 'LeadEntityResponse', data?: { __typename?: 'LeadEntity', id?: string | null, attributes?: { __typename?: 'Lead', name: string, secondName: string, email: string, phone: string } | null } | null } | null };


export const AddLeadDocument = gql`
    mutation addLead($data: LeadInput!) {
  createLead(data: $data) {
    data {
      id
      attributes {
        name
        secondName
        email
        phone
      }
    }
  }
}
    `;
export type AddLeadMutationFn = Apollo.MutationFunction<AddLeadMutation, AddLeadMutationVariables>;

/**
 * __useAddLeadMutation__
 *
 * To run a mutation, you first call `useAddLeadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLeadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLeadMutation, { data, loading, error }] = useAddLeadMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddLeadMutation(baseOptions?: Apollo.MutationHookOptions<AddLeadMutation, AddLeadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLeadMutation, AddLeadMutationVariables>(AddLeadDocument, options);
      }
export type AddLeadMutationHookResult = ReturnType<typeof useAddLeadMutation>;
export type AddLeadMutationResult = Apollo.MutationResult<AddLeadMutation>;
export type AddLeadMutationOptions = Apollo.BaseMutationOptions<AddLeadMutation, AddLeadMutationVariables>;