import { useState, type FC } from "react";
import { useUpdateBookForm_BookQuery } from "./UpdateBookForm.generated";

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
    onCompleted: (data) => {
      if (data.book.__typename === "BookResultOk" && data.book.result) {
        setFormState({ isbn: data.book.result.isbn });
      }
    },
  });

  /**
   * Exercise 2:
   * Update a book, and make sure the affected book ISBN is updated in the table
   * Hint: Use `Mutation.updateBook`
   */
  const updateBook: any = () => {};
  const updateBookResult: any = {
    error: undefined,
    loading: false,
    data: {},
  };
  /* End */

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

          updateBook({
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
