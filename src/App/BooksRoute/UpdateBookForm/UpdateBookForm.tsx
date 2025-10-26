import { useState, type FC } from "react";
import {
  useUpdateBookForm_BookQuery,
  useUpdateBookForm_UpdateBookMutation,
} from "./UpdateBookForm.generated";

export const UpdateBookForm: FC<{ bookId: string; onClose: () => void }> = ({
  bookId,
  onClose,
}) => {
  const [formState, setFormState] = useState<{ isbn: string }>({
    isbn: "",
  });
  const queryBookResult = useUpdateBookForm_BookQuery({
    variables: {
      id: bookId,
    },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data.book.__typename === "BookResultOk" && data.book.result) {
        setFormState({ isbn: data.book.result.isbn });
      }
    },
  });
  const [updateBook, updateBookResult] = useUpdateBookForm_UpdateBookMutation({
    onCompleted: (data) => {
      if (data.updateBook.__typename === "UpdateBookResultOk") {
        alert("Book updated!");
        onClose();
      }
    },
  });

  if (queryBookResult.loading) {
    return <div>Loading...</div>;
  }

  if (
    queryBookResult.error ||
    !queryBookResult.data ||
    queryBookResult.data.book.__typename === "ResultError"
  ) {
    return <div>Error</div>;
  }

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
        <button type="submit">
          {updateBookResult.loading ? "..." : "Update book"}
        </button>{" "}
        | <button onClick={onClose}>Close</button>
      </form>
    </>
  );
};
