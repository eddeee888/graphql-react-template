import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./AppLayout";
import { BooksRoute } from "./BooksRoute";
import { BookRoute } from "./BookRoute";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <div>Hello</div>
            </AppLayout>
          }
        />

        <Route path="/books" element={<AppLayout />}>
          <Route index element={<BooksRoute />} />
          <Route path=":id" element={<BookRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
