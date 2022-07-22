import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

import apolloClient from "@graphql/client";
import store from "@store/index";

import "@styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ApolloProvider>
    );
}

export default MyApp;
