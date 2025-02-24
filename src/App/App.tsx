import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppLayout } from "./AppLayout";
import { BooksRoute } from "./BooksRoute";
import { BookRoute } from "./BookRoute";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4488/graphql", // https://github.com/eddeee888/graphql-server-template
  cache: new InMemoryCache(),
});

export const App: FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<h1>Hello there!</h1>} />
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
