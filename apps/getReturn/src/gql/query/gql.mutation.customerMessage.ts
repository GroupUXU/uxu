/* @typescript-eslint/no-unsafe-assignment -- I don't know why i have problem */
import { gql } from '@apollo/client';

export const ADD_CUSTOMER_MESSAGE = gql`
    mutation AddCustomerMessage(
        $email: String!
        $message: String!
        $status: ENUM_CUSTOMERMESSAGE_STATUS!
        $type: ENUM_CUSTOMERMESSAGE_TYPE!
    ) {
        createCustomerMessage(
            data: {
                email: $email
                message: $message
                status: $status
                type: $type
            }
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
