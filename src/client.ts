import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache as Cache } from "apollo-cache-inmemory";

import { optionsType } from "./types";

export default (options: optionsType): ApolloClient<any> => {
  const httpConfig = {
    uri: options.uri
  };
  const httpLink = new HttpLink(httpConfig);

  const middlewareLink = new ApolloLink((operation, forward) => {
    if (options.headers) {
      operation.setContext({
        headers: options.headers
      });
    }
    return forward(operation);
  });

  return new ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache: new Cache()
  });
};
