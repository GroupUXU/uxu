export type SearchEngineConfig<T> = {
  defaultSugestions: T
  searchClientData: {
    api: {
      url: string;
      auth: string;
    },
    indexName: string,
  },
}
