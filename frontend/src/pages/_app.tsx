import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import apolloClient from "@graphql/client";

import "@styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
