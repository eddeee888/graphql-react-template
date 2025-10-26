import { graphql } from "../../../gql";

export const CreateBookDoc = graphql(`
  mutation CreateBook($input: CreateBookInput!) {
    createBook(input: $input) {
      ... on CreateBookResultOk {
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
