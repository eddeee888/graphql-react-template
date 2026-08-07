import { graphql } from "../../gql";

export const BookDetailsDoc = graphql(`
  query BookDetails($bookId: ID!) {
    book(id: $bookId) {
      ... on BookResultOk {
        result {
          ...BookDetails
          previousBookInSeries {
            id
          }
          nextBookInSeries {
            id
          }
        }
      }
      ... on ResultError {
        error
      }
    }
  }
`);
