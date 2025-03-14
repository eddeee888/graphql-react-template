export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID']['output'];
  isbn: Scalars['String']['output'];
  nextBookInSeries?: Maybe<Book>;
  previousBookInSeries?: Maybe<Book>;
};

export type BookResult = BookResultOk | ResultError;

export type BookResultOk = {
  __typename?: 'BookResultOk';
  result?: Maybe<Book>;
};

export type BooksResult = BooksResultOk | ResultError;

export type BooksResultOk = {
  __typename?: 'BooksResultOk';
  pagination: Pagination;
  result: Array<Book>;
};

export type CharacterNode = {
  id: Scalars['ID']['output'];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type CreateBookInput = {
  isbn: Scalars['String']['input'];
};

export type CreateBookResult = CreateBookResultOk | ResultError;

export type CreateBookResultOk = {
  __typename?: 'CreateBookResultOk';
  result: Book;
};

export type ExtraCharacter = CharacterNode & {
  __typename?: 'ExtraCharacter';
  creditName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type Fighter = CharacterNode & MainCharacter & {
  __typename?: 'Fighter';
  id: Scalars['ID']['output'];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  powerLevel: Scalars['Int']['output'];
  relatedCharacters: Array<CharacterNode>;
  screenName: Scalars['String']['output'];
};

export type MainCharacter = {
  screenName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
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
  __typename?: 'Pagination';
  totalPageCount: Scalars['Int']['output'];
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  recordsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  book: BookResult;
  books: BooksResult;
  character?: Maybe<CharacterNode>;
  user?: Maybe<User>;
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
  __typename?: 'ResultError';
  error: ResultErrorType;
};

export type ResultErrorType =
  | 'FORBIDDEN_ERROR'
  | 'INPUT_VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'UNEXPECTED_ERROR';

export type UpdateBookInput = {
  id: Scalars['ID']['input'];
  isbn: Scalars['String']['input'];
};

export type UpdateBookResult = ResultError | UpdateBookResultOk;

export type UpdateBookResultOk = {
  __typename?: 'UpdateBookResultOk';
  result: Book;
};

export type User = {
  __typename?: 'User';
  booksRead: Array<Book>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Wizard = CharacterNode & MainCharacter & {
  __typename?: 'Wizard';
  id: Scalars['ID']['output'];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
  screenName: Scalars['String']['output'];
  spells: Array<Scalars['String']['output']>;
};
