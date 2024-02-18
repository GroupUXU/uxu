/* @typescript-eslint/no-unsafe-assignment -- I don't know why i have problem */
import {gql} from '@apollo/client';
import {
  FRAGMENT_DATA_VIEWS,
  FRAGMENT_DATA_LEAD
} from '../fragments';

export const GET_PHONE = gql`
    ${FRAGMENT_DATA_VIEWS}
    ${FRAGMENT_DATA_LEAD}
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
                        pagination: { page: $page, pageSize: $pageSize }
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
`;