import * as Types from '../../../FIXME';

import type * as Types from '../../../operations-near-operation-files/__generated__/graphql';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type UpdateBookForm_BookQueryVariables = Exact<{
  id: string | number;
}>;


export type UpdateBookForm_BookQuery = { book:
    | { __typename: 'BookResultOk', result: { __typename: 'Book', id: string, isbn: string } | null }
    | { __typename: 'ResultError', error: Types.ResultErrorType }
   };

export type UpdateBookForm_UpdateBookMutationVariables = Exact<{
  input: Types.UpdateBookInput;
}>;


export type UpdateBookForm_UpdateBookMutation = { updateBook:
    | { __typename: 'ResultError', error: Types.ResultErrorType }
    | { __typename: 'UpdateBookResultOk', result: { __typename: 'Book', id: string, isbn: string } }
   };
