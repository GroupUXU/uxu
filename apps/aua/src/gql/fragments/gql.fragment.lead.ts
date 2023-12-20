/* @typescript-eslint/no-unsafe-assignment -- I don't know why i have problem */
import { gql } from '@apollo/client';

export const FRAGMENT_DATA_LEAD = gql`
  fragment FragmentDataLead on ComponentContentPartsLead {
    __typename
    id
    lead
  }
`;
