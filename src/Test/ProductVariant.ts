import { Image, Media, SelectedOption, UserError } from "./Globals.js";

// Product is defined here instead of in Product.ts to avoid circular dependency
export const Product = /* GraphQL */ `
  fragment Product on Product {
    id
    title
  }
`;

export const ProductVariant = /* GraphQL */ `
  fragment ProductVariant on ProductVariant {
    id
    title
    sku
    compareAtPrice
    price
    inventoryItem {
      id
      measurement {
        id
        weight {
          unit
          value
        }
      }
    }
    inventoryQuantity
    inventoryPolicy
    product {
      ...Product
    }
    image {
      ...Image
    }
    media(first: 10) {
      edges {
        node {
          ...Media
        }
      }
    }
    selectedOptions {
      ...SelectedOption
    }
  }
  ${Media}
  ${Image}
  ${Product}
  ${SelectedOption}
`;

export const GET_PRODUCT_VARIANTS = /* GraphQL */ `
  query GetProductVariants($first: Int, $query: String) {
    productVariants(first: $first, query: $query) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${ProductVariant}
`;

export const GET_PRODUCT_VARIANT = /* GraphQL */ `
  query GetProductVariant($id: ID!) {
    productVariant(id: $id) {
      ...ProductVariant
    }
  }
  ${ProductVariant}
`;

export const PRODUCT_VARIANTS_BULK_UPDATE = /* GraphQL */ `
  mutation ProductVariantsBulkUpdate(
    $productId: ID!
    $variants: [ProductVariantsBulkInput!]!
  ) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      productVariants {
        ...ProductVariant
      }
      userErrors {
        ...UserError
      }
    }
  }
  ${ProductVariant}
  ${UserError}
`;
