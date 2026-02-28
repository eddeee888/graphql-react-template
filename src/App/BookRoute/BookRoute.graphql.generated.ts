import * as Types from '../../FIXME';

import type * as Types from '../../operations-near-operation-files/__generated__/graphql';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type BookDetailsQueryVariables = Exact<{
  bookId: string | number;
}>;


export type BookDetailsQuery = { book:
    | { __typename: 'BookResultOk', result: { __typename: 'Book', id: string, isbn: string, previousBookInSeries: { __typename: 'Book', id: string } | null, nextBookInSeries: { __typename: 'Book', id: string } | null } | null }
    | { __typename: 'ResultError', error: Types.ResultErrorType }
   };
