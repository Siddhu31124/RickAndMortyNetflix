import { createRoot } from "react-dom/client";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

import "./index.css";
import App from "./App.tsx";
import { API } from "./Constant.ts";

const client = new ApolloClient({
  link: new HttpLink({
    uri: API,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          episodes: {
            keyArgs: false,
            merge(existing = { results: [] }, incoming) {
              return {
                results: [...existing.results, ...incoming.results],
              };
            },
          },
        },
      },
    },
  }),
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
