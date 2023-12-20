/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call -- Disabling TypeScript 'any' type check warnings due to the data structure received from the backend. */
import { InMemoryCache } from '@apollo/client';
import type { GetArticlesQuery } from "../../gql";


 export  const CACHE: InMemoryCache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          articles: {
            keyArgs: ["filters", "sort"],
            merge(existing, incoming) {
              // @ts-expect-error -- it is ok
              let data:  NonNullable<GetArticlesQuery['articles']['data']> = [];
              // @ts-expect-error -- it is ok
              let meta: NonNullable<GetArticlesQuery['articles']['meta']> = {};

              if (existing?.data) {
                data = data.concat(existing.data);
              }

              if (incoming?.data) {
                data = data.concat(incoming.data);
              }

              if (incoming?.meta) {
                meta = incoming.meta;
              }

              return {
                data,
                meta,
                __typename: incoming?.__typename || "",
              };
            },
          },
        },
      },
    },
  });
