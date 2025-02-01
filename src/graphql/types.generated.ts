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
};

export type BookPayload = BookResult | PayloadError;

export type BookResult = {
  __typename?: 'BookResult';
  result?: Maybe<Book>;
};

export type BooksPayload = BooksResult | PayloadError;

export type BooksResult = {
  __typename?: 'BooksResult';
  pagination: Pagination;
  result: Array<Book>;
};

export type CharacterNode = {
  id: Scalars['ID']['output'];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
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

export type Pagination = {
  __typename?: 'Pagination';
  totalPageCount: Scalars['Int']['output'];
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  recordsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadError = {
  __typename?: 'PayloadError';
  error: PayloadErrorType;
};

export enum PayloadErrorType {
  ForbiddenError = 'FORBIDDEN_ERROR',
  InputValidationError = 'INPUT_VALIDATION_ERROR',
  NotFound = 'NOT_FOUND',
  UnexpectedError = 'UNEXPECTED_ERROR'
}

export type Query = {
  __typename?: 'Query';
  book: BookPayload;
  books: BooksPayload;
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
