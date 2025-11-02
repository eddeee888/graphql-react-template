import { useState, type FC } from "react";
import { useMutation, useQuery } from "@apollo/client/react";
import {
  UpdateBookFormBookDoc,
  UpdateBookFormUpdateBookDoc,
} from "./UpdateBookForm.graphql";

export const UpdateBookForm: FC<{ bookId: string; onClose: () => void }> = ({
  bookId,
  onClose,
}) => {
  const { data, error, loading } = useQuery(UpdateBookFormBookDoc, {
    variables: { id: bookId },
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || data.book.__typename === "ResultError") {
    return <div>Error</div>;
  }

  if (!data.book.result) {
    return <div>Book not found!</div>;
  }

  return (
    <Form
      initialState={{ isbn: data.book.result.isbn }}
      bookId={bookId}
      onClose={onClose}
    />
  );
};

const Form: FC<{
  initialState: { isbn: string };
  bookId: string;
  onClose: () => void;
}> = ({ initialState, bookId, onClose }) => {
  const [formState, setFormState] = useState<{ isbn: string }>(initialState);
  const [updateBook, updateBookResult] = useMutation(
    UpdateBookFormUpdateBookDoc,
    {
      onCompleted: (data) => {
        if (data.updateBook.__typename === "UpdateBookResultOk") {
          alert("Book updated!");
          onClose();
        }
      },
    },
  );

  return (
    <>
      <h2>Edit Book</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          void updateBook({
            variables: {
              input: {
                id: bookId,
                isbn: formState.isbn,
              },
            },
          });
        }}
      >
        <input
          name="isbn"
          placeholder="ISBN"
          value={formState.isbn}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, isbn: e.target.value }))
          }
        />
        <br />
        {updateBookResult.error ||
        updateBookResult.data?.updateBook.__typename === "ResultError" ? (
          <div>Error occurred. Try again</div>
        ) : null}
        <br />
        {updateBookResult.loading ? (
          <button disabled>...</button>
        ) : (
          <button type="submit">Update book</button>
        )}{" "}
        | <button onClick={onClose}>Close</button>
      </form>
    </>
  );
};
