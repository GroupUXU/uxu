/* @typescript-eslint/no-unsafe-assignment -- I don't know why i have problem */
import {gql} from '@apollo/client';
import {
  FRAGMENT_DATA_VIEWS,
  FRAGMENT_DATA_LEAD
} from '../fragments';

export const GET_PHONE = gql`
    ${FRAGMENT_DATA_VIEWS}
    ${FRAGMENT_DATA_LEAD}
    query GetPhone($id: ID) {
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
                    lead {
                        ...FragmentDataLead
                    }
                    views {
                        ...FragmentDataViews
                    }
                    format {
                        ... on ComponentOthersFormat {
                            id
                            format
                        }
                    }
                    gallery {
                        ... on ComponentOthersCover {
                            id
                            typ
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
                        }
                    }
                }
            }
        }
    }
`;