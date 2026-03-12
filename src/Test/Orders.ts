import { MoneyV2, PageInfo } from "./Globals.js";

export const GET_ORDERS = /* GraphQL */ `
  query GetOrders($first: Int!, $query: String, $after: String) {
    orders(first: $first, query: $query, after: $after) {
      nodes {
        id
        legacyResourceId
        name
        email
        createdAt
        totalPriceSet {
          shopMoney {
            ...MoneyV2
          }
        }
        displayFinancialStatus
        lineItems(first: 5) {
          nodes {
            title
            variantTitle
            quantity
            sku
            discountedUnitPriceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
        tags
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
  ${PageInfo}
  ${MoneyV2}
`;
