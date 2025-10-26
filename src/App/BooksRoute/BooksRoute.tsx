import { Fragment, useState, type FC } from "react";
import { Link } from "react-router";
import { CreateBookForm } from "./CreateBookForm";
import { UpdateBookForm } from "./UpdateBookForm";
import { useQuery } from "@apollo/client/react";
import { BooksDoc } from "./BooksRoute.graphql";

export const BooksRoute: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shownForm, setShownForm] = useState<
    null | "create-book" | { form: "update-book"; bookId: string }
  >(null);
  const { data, loading, error, refetch } = useQuery(BooksDoc, {
    variables: {
      input: {
        page: currentPage,
      },
    },
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      <button onClick={() => refetch()}>Reload</button> |{" "}
      <button onClick={() => setShownForm("create-book")}>Create book</button>
      <br />
      <br />
      {(function renderBooksList() {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (error || !data || data.books.__typename === "ResultError") {
          return <div>Error</div>;
        }

        if (data.books.result.length === 0) {
          return (
            <div>
              No books. Create book <Link to="/books/create">here</Link>
            </div>
          );
        }

        return (
          <>
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
                      <td>
                        <Link to={`/books/${book.id}`}>{book.isbn}</Link>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            setShownForm({
                              form: "update-book",
                              bookId: book.id,
                            })
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
              },
            )}
          </>
        );
      })()}
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
