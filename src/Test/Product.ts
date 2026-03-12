import { Metafield } from "./Globals.js";
import { Product, ProductVariant } from "./ProductVariant.js";

export const GET_PRODUCT_WITH_VARIANTS = /* GraphQL */ `
  query GetProductWithVariants($id: ID!, $first: Int!) {
    product(id: $id) {
      ...Product
      variants(first: $first) {
        nodes {
          ...ProductVariant
        }
      }
    }
  }
  ${Product}
  ${ProductVariant}
`;

export const GET_PRODUCT_WITH_METAFIELD = /* GraphQL */ `
  query GetProductWithMetafield($id: ID!, $namespace: String!, $key: String!) {
    product(id: $id) {
      ...Product
      metafield(namespace: $namespace, key: $key) {
        ...Metafield
      }
    }
  }
  ${Product}
  ${Metafield}
`;
