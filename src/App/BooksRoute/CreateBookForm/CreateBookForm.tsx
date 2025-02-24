import { useState, type FC } from "react";

export const CreateBookForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  /**
   * Demo 2: Create book
   */
  const createBook: any = () => {};
  const loading = false;
  const data: any = {};
  const error = undefined;
  /* End */

  const [formState, setFormState] = useState<{ isbn: string }>({
    isbn: "",
  });

  return (
    <>
      <h2>Create Book</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          createBook({
            variables: {
              input: {
                isbn: formState.isbn,
              },
            },
          });
        }}
      >
        <input
          name="isbn"
          type="text"
          placeholder="ISBN"
          value={formState.isbn}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, isbn: e.target.value }))
          }
        />
        <br />
        {error || data?.createBook.__typename === "ResultError" ? (
          <div>Error occurred. Try again</div>
        ) : null}
        <br />
        <button type="submit">{loading ? "..." : "Create book"}</button> |{" "}
        <button onClick={onClose}>Close</button>
      </form>
    </>
  );
};
