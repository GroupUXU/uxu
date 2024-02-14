import { useMemo } from 'react';
import { ApolloClient, ApolloLink } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';
import { CACHE } from './config.cache';
import { LINK_API_GRAPHQL, LINK_API_REST} from './config.links';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([LINK_API_REST, LINK_API_GRAPHQL]),
    cache: CACHE,
    defaultOptions: {
      query: {
        errorPolicy: 'all',
      },
    }
  })
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null): ApolloClient<NormalizedCacheObject> {
  const _apolloClient: ApolloClient<NormalizedCacheObject> = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject | null): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}