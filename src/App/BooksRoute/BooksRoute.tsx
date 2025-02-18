import { Fragment, useState, type FC } from "react";
import { useBooksQuery } from "./BooksRoute.generated";
import { Link } from "react-router";
import { CreateBookForm } from "./CreateBookForm";
import { UpdateBookForm } from "./UpdateBookForm";

export const BooksRoute: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shownForm, setShownForm] = useState<
    null | "create-book" | { form: "update-book"; bookId: string }
  >(null);
  const { data, loading, error, refetch } = useBooksQuery({
    variables: {
      input: {
        page: currentPage,
      },
    },
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  const refreshButton = <button onClick={() => refetch()}>Reload</button>;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || data.books.__typename === "ResultError") {
    return (
      <>
        {refreshButton}
        <div>Error</div>
      </>
    );
  }

  if (data.books.result.length === 0) {
    return (
      <>
        {refreshButton}

        <div>
          No books. Create book <Link to="/books/create">here</Link>
        </div>
      </>
    );
  }

  return (
    <>
      {refreshButton} |{" "}
      <button onClick={() => setShownForm("create-book")}>Create book</button>
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.books.result.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.isbn}</td>
                <td>
                  <button
                    onClick={() =>
                      setShownForm({ form: "update-book", bookId: book.id })
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      {Array.from(
        { length: data.books.pagination.totalPageCount },
        (_, index) => {
          return (
            <Fragment key={index}>
              {" "}
              {index + 1 === currentPage ? (
                currentPage
              ) : (
                <button onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              )}{" "}
              |{" "}
            </Fragment>
          );
        }
      )}
      {shownForm === "create-book" && (
        <>
          <hr />
          <CreateBookForm onClose={() => setShownForm(null)} />
        </>
      )}
      {typeof shownForm === "object" && shownForm?.form === "update-book" && (
        <>
          <hr />
          <UpdateBookForm
            bookId={shownForm.bookId}
            onClose={() => setShownForm(null)}
          />
        </>
      )}
    </>
  );
};
