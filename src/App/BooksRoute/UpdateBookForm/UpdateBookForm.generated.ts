import * as Types from '../../../graphql/types.generated';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateBookForm_BookQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type UpdateBookForm_BookQuery = { __typename: 'Query', book: { __typename: 'BookResultOk', result?: { __typename: 'Book', id: string, isbn: string } | null } | { __typename: 'ResultError', error: Types.ResultErrorType } };


export const UpdateBookForm_BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UpdateBookForm_Book"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BookResultOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResultError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useUpdateBookForm_BookQuery__
 *
 * To run a query within a React component, call `useUpdateBookForm_BookQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookForm_BookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateBookForm_BookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateBookForm_BookQuery(baseOptions: Apollo.QueryHookOptions<UpdateBookForm_BookQuery, UpdateBookForm_BookQueryVariables> & ({ variables: UpdateBookForm_BookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UpdateBookForm_BookQuery, UpdateBookForm_BookQueryVariables>(UpdateBookForm_BookDocument, options);
      }
export function useUpdateBookForm_BookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpdateBookForm_BookQuery, UpdateBookForm_BookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UpdateBookForm_BookQuery, UpdateBookForm_BookQueryVariables>(UpdateBookForm_BookDocument, options);
        }
export function useUpdateBookForm_BookSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UpdateBookForm_BookQuery, UpdateBookForm_BookQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UpdateBookForm_BookQuery, UpdateBookForm_BookQueryVariables>(UpdateBookForm_BookDocument, options);
        }
export type UpdateBookForm_BookQueryHookResult = ReturnType<typeof useUpdateBookForm_BookQuery>;
export type UpdateBookForm_BookLazyQueryHookResult = ReturnType<typeof useUpdateBookForm_BookLazyQuery>;
export type UpdateBookForm_BookSuspenseQueryHookResult = ReturnType<typeof useUpdateBookForm_BookSuspenseQuery>;
export type UpdateBookForm_BookQueryResult = Apollo.QueryResult<UpdateBookForm_BookQuery, UpdateBookForm_BookQueryVariables>;