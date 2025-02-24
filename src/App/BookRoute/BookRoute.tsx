import type { FC } from "react";
import { Link, useParams } from "react-router";

export const BookRoute: FC = () => {
  const { bookId } = useParams<{ bookId: string }>();

  if (!bookId) {
    // Realistically it won't be here because this route is `/books/:bookId`
    // And if there's no bookId, it renders `/books`
    return null;
  }

  return <BookDetails bookId={bookId} />;
};

const BookDetails: FC<{ bookId: string }> = ({ bookId }) => {
  /* Exercise 1: Use bookId to dynamically query book from server */
  const loading = false;
  const error = undefined;
  const data: any = {
    book: {
      __typename: "ResultSuccess",
      result: null,
    },
  };
  /* End */

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || data.book.__typename === "ResultError") {
    return <div>Error!</div>;
  }

  if (!data.book.result) {
    return <div>Book not found!</div>;
  }

  const book = data.book.result;

  return (
    <>
      <h1>Book (ID: {data.book.result.id})</h1>
      <div>
        ISBN: <b>{data.book.result.isbn}</b>
      </div>

      <hr />

      {book.previousBookInSeries && (
        <Link to={`/books/${book.previousBookInSeries.id}`}>Previous</Link>
      )}

      {book.previousBookInSeries && book.nextBookInSeries && <> | </>}

      {book.nextBookInSeries && (
        <Link to={`/books/${book.nextBookInSeries.id}`}>Next</Link>
      )}
    </>
  );
};
