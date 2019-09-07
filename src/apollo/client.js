import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  // eslint-disable-next-line no-console
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

export default new ApolloClient({
  link: errorLink.concat(
    createHttpLink({ uri: process.env.API_URL || "http://localhost:4000" })
  ),
  cache
});
