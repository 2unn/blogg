import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../lib/apolloClient";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
