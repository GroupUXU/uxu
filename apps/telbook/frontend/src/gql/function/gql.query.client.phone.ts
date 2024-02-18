import type {ApolloQueryResult} from "@apollo/client";
import { initializeApollo } from '../../config';
import {GET_PHONE} from '../query';
import type {GetPhoneQuery} from '../types';

type ClientGetPhoneQueryProps = {
  variables: {
    id: string;
    page?: number;
    pageSize?: number;
  }
}

export async function clientGetPhoneQuery ({ variables: { id, pageSize = 12, page = 1 }}: ClientGetPhoneQueryProps): Promise<ApolloQueryResult<GetPhoneQuery>> {
  const options = {query: GET_PHONE, variables: { id, pageSize, page }};
  return initializeApollo().query<GetPhoneQuery>( options );
}