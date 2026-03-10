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
