import { ApolloClient, InMemoryCache } from "@apollo/client";
import { onError } from "apollo-link-error";
const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  
});

export { apolloClient };
