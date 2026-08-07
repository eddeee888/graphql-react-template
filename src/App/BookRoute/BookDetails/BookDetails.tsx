import type { FC } from "react";
import { useFragment, type FragmentType } from "../../../gql";
import { BookDetailsFragmentDoc } from "./BookDetails.graphql";

export const BookDetails: FC<{
  book: FragmentType<typeof BookDetailsFragmentDoc>;
}> = ({ book }) => {
  const bookFragment = useFragment(BookDetailsFragmentDoc, book);
  return (
    <>
      <h1>Book (ID: {bookFragment.id})</h1>
      <div>
        ISBN: <b>{bookFragment.isbn}</b>
      </div>
    </>
  );
};
