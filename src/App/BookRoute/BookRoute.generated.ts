import * as Types from '../../graphql/types.generated';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BookDetailsQueryVariables = Types.Exact<{
  bookId: Types.Scalars['ID']['input'];
}>;


export type BookDetailsQuery = { __typename: 'Query', book: { __typename: 'BookResultOk', result?: { __typename: 'Book', id: string, isbn: string } | null } | { __typename: 'ResultError', error: Types.ResultErrorType } };


export const BookDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BookDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BookResultOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResultError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useBookDetailsQuery__
 *
 * To run a query within a React component, call `useBookDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookDetailsQuery({
 *   variables: {
 *      bookId: // value for 'bookId'
 *   },
 * });
 */
export function useBookDetailsQuery(baseOptions: Apollo.QueryHookOptions<BookDetailsQuery, BookDetailsQueryVariables> & ({ variables: BookDetailsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookDetailsQuery, BookDetailsQueryVariables>(BookDetailsDocument, options);
      }
export function useBookDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookDetailsQuery, BookDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookDetailsQuery, BookDetailsQueryVariables>(BookDetailsDocument, options);
        }
export function useBookDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BookDetailsQuery, BookDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BookDetailsQuery, BookDetailsQueryVariables>(BookDetailsDocument, options);
        }
export type BookDetailsQueryHookResult = ReturnType<typeof useBookDetailsQuery>;
export type BookDetailsLazyQueryHookResult = ReturnType<typeof useBookDetailsLazyQuery>;
export type BookDetailsSuspenseQueryHookResult = ReturnType<typeof useBookDetailsSuspenseQuery>;
export type BookDetailsQueryResult = Apollo.QueryResult<BookDetailsQuery, BookDetailsQueryVariables>;