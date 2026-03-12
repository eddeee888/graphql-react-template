const DiscountMetafield = /* GraphQL */ `
  fragment DiscountMetafield on Metafield {
    id
    namespace
    key
    value
  }
`;

export const GET_DISCOUNT_NODES = /* GraphQL */ `
  query GetDiscountNodes($firstNodes: Int!, $firstMetafields: Int!) {
    discountNodes(first: $firstNodes, query: "type:app") {
      edges {
        node {
          id
          discount {
            ... on DiscountAutomaticApp {
              title
            }
          }
          metafields(first: $firstMetafields) {
            edges {
              node {
                ...DiscountMetafield
              }
            }
          }
        }
      }
    }
  }
  ${DiscountMetafield}
`;
