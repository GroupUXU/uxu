/* @typescript-eslint/no-unsafe-assignment -- I don't know why i have problem */
import { gql } from '@apollo/client';
import { FRAGMENT_DATA_ADRESS } from '../fragments';

export const GET_CLIENTS_WITH_TAGS = gql`
  ${FRAGMENT_DATA_ADRESS}
  query getClientsWithTags($tagsId: [ID]!) {
    clients(filters: { branches: { shortname: { id: { in: $tagsId } } } }) {
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
`;
