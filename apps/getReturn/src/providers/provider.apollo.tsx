import type { PropsWithChildren, ReactElement } from 'react';
import { ApolloProvider } from '@apollo/client';
import { APOLLO_CLIENT } from '../config'


type ApolloCLientProviderProps = PropsWithChildren
export function ApolloCLientProvider({ children }: ApolloCLientProviderProps): ReactElement {
  return <ApolloProvider client={APOLLO_CLIENT}>{children}</ApolloProvider>
}
