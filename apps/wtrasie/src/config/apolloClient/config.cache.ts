import { InMemoryCache } from '@apollo/client';

type IncomingType = {
  __typename?: string;
  data?: Array<unknown>;
  meta?: Record<string, unknown>;
};

export const CACHE: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        articles: {
          keyArgs: ["filters", "sort"],
          merge(existing: IncomingType | undefined, incoming: IncomingType) {
            let data: Array<unknown> = [];
            let meta: Record<string, unknown> = {};

            if (existing?.data) {
              data = data.concat(existing.data);
            }

            if (incoming.data) {
              data = data.concat(incoming.data);
            }

            if (incoming.meta) {
              meta = incoming.meta;
            }

            return {
              __typename: incoming.__typename,
              data,
              meta,
            };
          },
        },
      },
    },
  },
});
