/* @typescript-eslint/no-unsafe-assignment -- I don't know why i have problem */
import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation addComment($data: CommentInput!) {
    createComment(data: $data) {
      data {
        id
        attributes {
          message
          reputation
        }
      }
    }
  }
`;