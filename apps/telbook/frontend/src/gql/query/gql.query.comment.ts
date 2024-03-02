import { gql } from '@apollo/client';
export const GET_COMMENTS = gql`
    query GetComments($phone: String, $page: Int!, $pageSize: Int!) {
        comments(
            filters: { phone: { phone: { contains: $phone } } }
            sort: ["createdAt:asc"]
            pagination: { page: $page, pageSize: $pageSize }
        ) {
            data {
                id
                attributes {
                    message
                    createdAt
                    updatedAt
                    reputation
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
