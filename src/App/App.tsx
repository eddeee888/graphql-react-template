import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { Defer20220824Handler } from "@apollo/client/incremental";
import { ApolloProvider } from "@apollo/client/react";
import { AppLayout } from "./AppLayout";
import { BooksRoute } from "./BooksRoute";
import { BookRoute } from "./BookRoute";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4488/graphql", // https://github.com/eddeee888/graphql-server-template
  }),
  incrementalHandler: new Defer20220824Handler(),
  cache: new InMemoryCache(),
});

export const App: FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<h1>Welcome to Ermahzern!</h1>} />
          </Route>
          <Route path="/books" element={<AppLayout />}>
            <Route index element={<BooksRoute />} />
            <Route path=":bookId" element={<BookRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
