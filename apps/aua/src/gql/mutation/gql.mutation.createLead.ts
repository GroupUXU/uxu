/* @typescript-eslint/no-unsafe-assignment -- I don't know why i have problem */
import { gql } from '@apollo/client';

export const POST_CREATE_LEAD = gql`
  mutation addLead($data: LeadInput!) {
    createLead(data: $data) {
      data {
        id
        attributes {
          name
          secondName
          email
          phone
          recid
        }
      }
    }
  }

`;