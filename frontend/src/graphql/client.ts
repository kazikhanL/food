import { ApolloClient, InMemoryCache } from "@apollo/client";

import { SERVER_GRAPHQL } from "@constants";

const apolloClient = new ApolloClient({
    uri: SERVER_GRAPHQL,
    cache: new InMemoryCache(),
});

export default apolloClient;
