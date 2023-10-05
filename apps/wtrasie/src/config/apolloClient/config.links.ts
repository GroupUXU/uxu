import { HttpLink } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';


export const LINK_API_GRAPHQL = new HttpLink({ uri: "https://wtrasie.herokuapp.com/graphql" });
export const LINK_API_REST = new RestLink({
  uri: "https://wtrasie.herokuapp.com/api/"
});
