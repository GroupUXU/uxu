import type { InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch';

export type SearchEngineConfig<T> = { searchClientData: InstantMeiliSearchInstance, indexName: string, defaultSugestions: T }
