import { Fragment, useState, type FC } from "react";
import { useBooksQuery } from "./BooksRoute.generated";
import { Link } from "react-router";
import { CreateBook } from "./CreateBook";

export const BooksRoute: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shownForm, setShownForm] = useState<null | "create-book">(null);
  const { data, loading, error, refetch } = useBooksQuery({
    variables: {
      input: {
        page: currentPage,
      },
    },
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  const refreshButton = <button onClick={() => refetch()}>🔄</button>;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || data.books.__typename === "PayloadError") {
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
      <button onClick={() => setShownForm("create-book")}>➕</button>
      <br />
      <br />
      <table>
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
                  <button>✏️</button>
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
          <br />
          <br />
          <hr />
          <h2>Create new book</h2>
          <CreateBook onClose={() => setShownForm(null)} />
        </>
      )}
    </>
  );
};
