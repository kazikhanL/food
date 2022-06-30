import type { AppProps } from "next/app";

import "@styles/global.scss";
import Layout from "@Layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
