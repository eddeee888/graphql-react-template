import { useState, type FC } from "react";
import { useCreateBookMutation } from "./CreateBookForm.generated";

export const CreateBookForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [createBook, { loading, data, error }] = useCreateBookMutation({
    onCompleted: (data) => {
      if (data.createBook.__typename === "CreateBookResultOk") {
        alert("Book created!");
        onClose();
      }
    },
  });

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
