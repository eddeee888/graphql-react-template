import * as Types from '../../FIXME';

import type * as Types from '../../operations-near-operation-files/__generated__/graphql';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type BooksQueryVariables = Exact<{
  input: Types.PaginationInput;
}>;


export type BooksQuery = { books:
    | { __typename: 'BooksResultOk', result: Array<{ __typename: 'Book', id: string, isbn: string }>, pagination: { __typename: 'Pagination', totalPageCount: number } }
    | { __typename: 'ResultError', error: Types.ResultErrorType }
   };
