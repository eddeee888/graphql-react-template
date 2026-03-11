import { MoneyV2 } from "./Globals.js";

export const GET_ORDER = /* GraphQL */ `
  query GetOrder($id: ID!) {
    order(id: $id) {
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
  }
  ${MoneyV2}
`;
