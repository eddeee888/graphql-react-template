import type { FC } from "react";
import { useParams } from "react-router";
import { useBookDetailsQuery } from "./BookRoute.generated";

export const BookRoute: FC = () => {
  const { bookId } = useParams<{ bookId: string }>();

  if (!bookId) {
    return null;
  }

  return <BookDetails bookId={bookId} />;
};

const BookDetails: FC<{ bookId: string }> = ({ bookId }) => {
  const { data, loading, error } = useBookDetailsQuery({
    variables: { bookId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data || data.book.__typename === "ResultError") {
    return <p>Error!</p>;
  }

  if (!data.book.result) {
    return <p>Book not found!</p>;
  }

  return (
    <>
      <h1>Book (ID: {data.book.result.id})</h1>
      <p>ISBN: {data.book.result.isbn}</p>
    </>
  );
};
