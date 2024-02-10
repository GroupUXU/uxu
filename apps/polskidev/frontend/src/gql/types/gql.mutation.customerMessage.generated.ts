import * as Types from './api-gateway.service.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddCustomerMessageMutationVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  message: Types.Scalars['String']['input'];
  status: Types.Enum_Customermessage_Status;
  type: Types.Enum_Customermessage_Type;
}>;


export type AddCustomerMessageMutation = { __typename?: 'Mutation', createCustomerMessage?: { __typename?: 'CustomerMessageEntityResponse', data?: { __typename?: 'CustomerMessageEntity', id?: string | null, attributes?: { __typename?: 'CustomerMessage', email: string, message: string, status?: Types.Enum_Customermessage_Status | null, type?: Types.Enum_Customermessage_Type | null } | null } | null } | null };


export const AddCustomerMessageDocument = gql`
    mutation AddCustomerMessage($email: String!, $message: String!, $status: ENUM_CUSTOMERMESSAGE_STATUS!, $type: ENUM_CUSTOMERMESSAGE_TYPE!) {
  createCustomerMessage(
    data: {email: $email, message: $message, status: $status, type: $type}
  ) {
    data {
      id
      attributes {
        email
        message
        status
        type
      }
    }
  }
}
    `;
export type AddCustomerMessageMutationFn = Apollo.MutationFunction<AddCustomerMessageMutation, AddCustomerMessageMutationVariables>;

/**
 * __useAddCustomerMessageMutation__
 *
 * To run a mutation, you first call `useAddCustomerMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCustomerMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCustomerMessageMutation, { data, loading, error }] = useAddCustomerMessageMutation({
 *   variables: {
 *      email: // value for 'email'
 *      message: // value for 'message'
 *      status: // value for 'status'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useAddCustomerMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddCustomerMessageMutation, AddCustomerMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCustomerMessageMutation, AddCustomerMessageMutationVariables>(AddCustomerMessageDocument, options);
      }
export type AddCustomerMessageMutationHookResult = ReturnType<typeof useAddCustomerMessageMutation>;
export type AddCustomerMessageMutationResult = Apollo.MutationResult<AddCustomerMessageMutation>;
export type AddCustomerMessageMutationOptions = Apollo.BaseMutationOptions<AddCustomerMessageMutation, AddCustomerMessageMutationVariables>;