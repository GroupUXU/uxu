import type { PropsWithChildren, ReactElement } from 'react';
import { ApolloProvider } from '@apollo/client';
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';


type ApolloCLientProviderProps = PropsWithChildren<{ apolloClient: ApolloClient<NormalizedCacheObject> }>
export function ApolloCLientProvider({ children, apolloClient }: ApolloCLientProviderProps): ReactElement {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
