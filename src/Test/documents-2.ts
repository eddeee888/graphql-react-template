const UserError = /* GraphQL */ `
  fragment UserError on UserError {
    field
    message
  }
`;

export const TAGS_ADD = /* GraphQL */ `
  mutation TagsAdd($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        ...UserError
      }
    }
  }
`;
