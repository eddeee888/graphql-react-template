/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query BookDetails($bookId: ID!) {\n    book(id: $bookId) {\n      ... on BookResultOk {\n        result {\n          id\n          isbn\n          previousBookInSeries {\n            id\n          }\n          nextBookInSeries {\n            id\n          }\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": typeof types.BookDetailsDocument,
    "\n  query Books($input: PaginationInput!) {\n    books(input: $input) {\n      ... on BooksResultOk {\n        result {\n          id\n          isbn\n        }\n        pagination {\n          totalPageCount\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": typeof types.BooksDocument,
    "\n  mutation CreateBook($input: CreateBookInput!) {\n    createBook(input: $input) {\n      ... on CreateBookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": typeof types.CreateBookDocument,
    "\n  query UpdateBookForm_Book($id: ID!) {\n    book(id: $id) {\n      ... on BookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": typeof types.UpdateBookForm_BookDocument,
    "\n  mutation UpdateBookForm_UpdateBook($input: UpdateBookInput!) {\n    updateBook(input: $input) {\n      ... on UpdateBookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": typeof types.UpdateBookForm_UpdateBookDocument,
};
const documents: Documents = {
    "\n  query BookDetails($bookId: ID!) {\n    book(id: $bookId) {\n      ... on BookResultOk {\n        result {\n          id\n          isbn\n          previousBookInSeries {\n            id\n          }\n          nextBookInSeries {\n            id\n          }\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": types.BookDetailsDocument,
    "\n  query Books($input: PaginationInput!) {\n    books(input: $input) {\n      ... on BooksResultOk {\n        result {\n          id\n          isbn\n        }\n        pagination {\n          totalPageCount\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": types.BooksDocument,
    "\n  mutation CreateBook($input: CreateBookInput!) {\n    createBook(input: $input) {\n      ... on CreateBookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": types.CreateBookDocument,
    "\n  query UpdateBookForm_Book($id: ID!) {\n    book(id: $id) {\n      ... on BookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": types.UpdateBookForm_BookDocument,
    "\n  mutation UpdateBookForm_UpdateBook($input: UpdateBookInput!) {\n    updateBook(input: $input) {\n      ... on UpdateBookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": types.UpdateBookForm_UpdateBookDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BookDetails($bookId: ID!) {\n    book(id: $bookId) {\n      ... on BookResultOk {\n        result {\n          id\n          isbn\n          previousBookInSeries {\n            id\n          }\n          nextBookInSeries {\n            id\n          }\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  query BookDetails($bookId: ID!) {\n    book(id: $bookId) {\n      ... on BookResultOk {\n        result {\n          id\n          isbn\n          previousBookInSeries {\n            id\n          }\n          nextBookInSeries {\n            id\n          }\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Books($input: PaginationInput!) {\n    books(input: $input) {\n      ... on BooksResultOk {\n        result {\n          id\n          isbn\n        }\n        pagination {\n          totalPageCount\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  query Books($input: PaginationInput!) {\n    books(input: $input) {\n      ... on BooksResultOk {\n        result {\n          id\n          isbn\n        }\n        pagination {\n          totalPageCount\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBook($input: CreateBookInput!) {\n    createBook(input: $input) {\n      ... on CreateBookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBook($input: CreateBookInput!) {\n    createBook(input: $input) {\n      ... on CreateBookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UpdateBookForm_Book($id: ID!) {\n    book(id: $id) {\n      ... on BookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  query UpdateBookForm_Book($id: ID!) {\n    book(id: $id) {\n      ... on BookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateBookForm_UpdateBook($input: UpdateBookInput!) {\n    updateBook(input: $input) {\n      ... on UpdateBookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBookForm_UpdateBook($input: UpdateBookInput!) {\n    updateBook(input: $input) {\n      ... on UpdateBookResultOk {\n        result {\n          id\n          isbn\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;