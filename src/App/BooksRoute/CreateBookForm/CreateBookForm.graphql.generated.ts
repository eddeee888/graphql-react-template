import * as Types from '../../../FIXME';

import type * as Types from '../../../operations-near-operation-files/__generated__/graphql';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type CreateBookMutationVariables = Exact<{
  input: Types.CreateBookInput;
}>;


export type CreateBookMutation = { createBook:
    | { __typename: 'CreateBookResultOk', result: { __typename: 'Book', id: string, isbn: string } }
    | { __typename: 'ResultError', error: Types.ResultErrorType }
   };
