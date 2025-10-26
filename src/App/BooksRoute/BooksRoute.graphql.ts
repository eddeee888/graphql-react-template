import { graphql } from "../../gql";

export const BooksDoc = graphql(`
  query Books($input: PaginationInput!) {
    books(input: $input) {
      ... on BooksResultOk {
        result {
          id
          isbn
        }
        pagination {
          totalPageCount
        }
      }
      ... on ResultError {
        error
      }
    }
  }
`);
