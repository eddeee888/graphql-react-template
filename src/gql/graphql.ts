/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Book = {
  __typename: 'Book';
  id: Scalars['ID']['output'];
  isbn: Scalars['String']['output'];
  nextBookInSeries: Maybe<Book>;
  previousBookInSeries: Maybe<Book>;
};

export type BookResult = BookResultOk | ResultError;

export type BookResultOk = {
  __typename: 'BookResultOk';
  result: Maybe<Book>;
};

export type BooksResult = BooksResultOk | ResultError;

export type BooksResultOk = {
  __typename: 'BooksResultOk';
  pagination: Pagination;
  result: Array<Book>;
};

export type CharacterNode = {
  id: Scalars['ID']['output'];
  mostRelatedCharacter: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type CreateBookInput = {
  isbn: Scalars['String']['input'];
};

export type CreateBookResult = CreateBookResultOk | ResultError;

export type CreateBookResultOk = {
  __typename: 'CreateBookResultOk';
  result: Book;
};

export type ExtraCharacter = CharacterNode & {
  __typename: 'ExtraCharacter';
  creditName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mostRelatedCharacter: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type Fighter = CharacterNode & MainCharacter & {
  __typename: 'Fighter';
  id: Scalars['ID']['output'];
  mostRelatedCharacter: Maybe<CharacterNode>;
  powerLevel: Scalars['Int']['output'];
  relatedCharacters: Array<CharacterNode>;
  screenName: Scalars['String']['output'];
};

export type MainCharacter = {
  screenName: Scalars['String']['output'];
};

export type Mutation = {
  __typename: 'Mutation';
  createBook: CreateBookResult;
  updateBook: UpdateBookResult;
};


export type MutationCreateBookArgs = {
  input: CreateBookInput;
};


export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};

export type Pagination = {
  __typename: 'Pagination';
  totalPageCount: Scalars['Int']['output'];
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  recordsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename: 'Query';
  book: BookResult;
  books: BooksResult;
  character: Maybe<CharacterNode>;
  user: Maybe<User>;
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBooksArgs = {
  input: PaginationInput;
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type ResultError = {
  __typename: 'ResultError';
  error: ResultErrorType;
};

export enum ResultErrorType {
  ForbiddenError = 'FORBIDDEN_ERROR',
  InputValidationError = 'INPUT_VALIDATION_ERROR',
  NotFound = 'NOT_FOUND',
  UnexpectedError = 'UNEXPECTED_ERROR'
}

export type UpdateBookInput = {
  id: Scalars['ID']['input'];
  isbn: Scalars['String']['input'];
};

export type UpdateBookResult = ResultError | UpdateBookResultOk;

export type UpdateBookResultOk = {
  __typename: 'UpdateBookResultOk';
  result: Book;
};

export type User = {
  __typename: 'User';
  booksRead: Array<Book>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Wizard = CharacterNode & MainCharacter & {
  __typename: 'Wizard';
  id: Scalars['ID']['output'];
  mostRelatedCharacter: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
  screenName: Scalars['String']['output'];
  spells: Array<Scalars['String']['output']>;
};

export type BookDetailsQueryVariables = Exact<{
  bookId: Scalars['ID']['input'];
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
  id: Scalars['ID']['input'];
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


export const BookDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BookDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BookResultOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}},{"kind":"Field","name":{"kind":"Name","value":"previousBookInSeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextBookInSeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResultError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<BookDetailsQuery, BookDetailsQueryVariables>;
export const BooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Books"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BooksResultOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPageCount"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResultError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<BooksQuery, BooksQueryVariables>;
export const CreateBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBookInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBookResultOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResultError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<CreateBookMutation, CreateBookMutationVariables>;
export const UpdateBookForm_BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UpdateBookForm_Book"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BookResultOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResultError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateBookForm_BookQuery, UpdateBookForm_BookQueryVariables>;
export const UpdateBookForm_UpdateBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBookForm_UpdateBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBookInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBookResultOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResultError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateBookForm_UpdateBookMutation, UpdateBookForm_UpdateBookMutationVariables>;