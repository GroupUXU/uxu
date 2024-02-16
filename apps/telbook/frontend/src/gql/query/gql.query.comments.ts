/* @typescript-eslint/no-unsafe-assignment -- I don't know why i have problem */
import { gql } from '@apollo/client';
export const GET_COMMENTS = gql`
    query GetComments($phone: String!, $page: Int!, $pageSize: Int!) {
        comments(
            filters: { phone: { phone: { contains: $phone } } }
            sort: ["createdAt:asc"]
            pagination: { page: $page, pageSize: $pageSize }
        ) {
            data {
                id
                attributes {
                    createdAt
                    author
                    message
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
            meta {
                pagination {
                    total
                    page
                    pageSize
                    pageCount
                }
            }
        }
    }
`;
