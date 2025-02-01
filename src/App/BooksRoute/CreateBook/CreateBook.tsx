import { useState, type FC } from "react";
import { useCreateBookMutation } from "./CreateBook.generated";

export const CreateBook: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [createBook, { loading, data, error }] = useCreateBookMutation({
    onCompleted: () => {
      alert("Book created!");
      onClose();
    },
  });

  const [formState, setFormState] = useState<{ isbn: string }>({
    isbn: "",
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

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
      {error || data?.createBook.__typename === "PayloadError" ? (
        <div>Error occurred. Try again</div>
      ) : null}
      <br />
      <button type="submit">{loading ? "🚧" : "Create book"}</button> |{" "}
      <button onClick={onClose}>Close</button>
    </form>
  );
};
