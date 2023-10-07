import { HttpLink } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';


export const LINK_API_GRAPHQL = new HttpLink({ uri: "https://getreturn-2f7298c91537.herokuapp.com/graphql" });
export const LINK_API_REST = new RestLink({
  uri: "https://getreturn.pl/api/"
});
