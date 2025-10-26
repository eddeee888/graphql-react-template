import { graphql } from "../../../gql";

export const UpdateBookFormBookDoc = graphql(`
  query UpdateBookForm_Book($id: ID!) {
    book(id: $id) {
      ... on BookResultOk {
        result {
          id
          isbn
        }
      }
      ... on ResultError {
        error
      }
    }
  }
`);

export const UpdateBookFormUpdateBookDoc = graphql(`
  mutation UpdateBookForm_UpdateBook($input: UpdateBookInput!) {
    updateBook(input: $input) {
      ... on UpdateBookResultOk {
        result {
          id
          isbn
        }
      }
      ... on ResultError {
        error
      }
    }
  }
`);
