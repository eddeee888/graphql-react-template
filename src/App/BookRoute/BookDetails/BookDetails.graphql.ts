import { graphql } from "../../../gql";

export const BookDetailsFragmentDoc = graphql(`
  fragment BookDetails on Book {
    id
    isbn
  }
`);
