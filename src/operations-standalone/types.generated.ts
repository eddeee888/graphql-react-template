type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type CreateBookInput = {
  isbn: string;
};

export type PaginationInput = {
  page?: number | null | undefined;
  recordsPerPage?: number | null | undefined;
};

export type ResultErrorType =
  | 'FORBIDDEN_ERROR'
  | 'INPUT_VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'UNEXPECTED_ERROR';

export type UpdateBookInput = {
  id: string | number;
  isbn: string;
};

export type BookDetailsQueryVariables = Exact<{
  bookId: string | number;
}>;


export type BookDetailsQuery = { book:
    | { __typename: 'BookResultOk', result: { __typename: 'Book', id: string, isbn: string, previousBookInSeries: { __typename: 'Book', id: string } | null, nextBookInSeries: { __typename: 'Book', id: string } | null } | null }
    | { __typename: 'ResultError', error: ResultErrorType }
   };

export type BooksQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type BooksQuery = { books:
    | { __typename: 'BooksResultOk', result: Array<{ __typename: 'Book', id: string, isbn: string }>, pagination: { __typename: 'Pagination', totalPageCount: number } }
    | { __typename: 'ResultError', error: ResultErrorType }
   };

export type CreateBookMutationVariables = Exact<{
  input: CreateBookInput;
}>;


export type CreateBookMutation = { createBook:
    | { __typename: 'CreateBookResultOk', result: { __typename: 'Book', id: string, isbn: string } }
    | { __typename: 'ResultError', error: ResultErrorType }
   };

export type UpdateBookForm_BookQueryVariables = Exact<{
  id: string | number;
}>;


export type UpdateBookForm_BookQuery = { book:
    | { __typename: 'BookResultOk', result: { __typename: 'Book', id: string, isbn: string } | null }
    | { __typename: 'ResultError', error: ResultErrorType }
   };

export type UpdateBookForm_UpdateBookMutationVariables = Exact<{
  input: UpdateBookInput;
}>;


export type UpdateBookForm_UpdateBookMutation = { updateBook:
    | { __typename: 'ResultError', error: ResultErrorType }
    | { __typename: 'UpdateBookResultOk', result: { __typename: 'Book', id: string, isbn: string } }
   };
