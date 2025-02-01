import { Fragment, useState, type FC } from "react";
import { useBooksQuery } from "./BooksRoute.generated";
import { Link } from "react-router";

export const BooksRoute: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
      {refreshButton}

      <ul>
        {data.books.result.map((book) => {
          return <li key={book.id}>{book.isbn}</li>;
        })}
      </ul>

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
    </>
  );
};
