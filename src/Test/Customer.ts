import { UserError } from "./Globals.js";

const Customer = /* GraphQL */ `
  fragment Customer on Customer {
    id
    tags
  }
`;

export const GET_CUSTOMERS_FULL = /* GraphQL */ `
  query GetCustomersFull($first: Int, $query: String) {
    customers(first: $first, query: $query) {
      nodes {
        ...Customer
        firstName
        lastName
        addresses {
          id
          firstName
          lastName
          address1
          city
          province
          country
          zip
          phone
          name
          provinceCode
          countryCodeV2
        }
        defaultAddress {
          id
          address1
          city
          province
          country
          zip
          phone
          provinceCode
          countryCodeV2
        }
        defaultEmailAddress {
          validFormat
        }
        numberOfOrders
      }
    }
  }
  ${Customer}
`;
export const GET_CUSTOMERS = /* GraphQL */ `
  query GetCustomers($first: Int, $query: String) {
    customers(first: $first, query: $query) {
      nodes {
        ...Customer
      }
    }
  }
  ${Customer}
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
  ${UserError}
`;

export const TAGS_REMOVE = /* GraphQL */ `
  mutation TagsRemove($id: ID!, $tags: [String!]!) {
    tagsRemove(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        ...UserError
      }
    }
  }
  ${UserError}
`;

export const CUSTOMER_CREATE = /* GraphQL */ `
  mutation CustomerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      customer {
        ...Customer
      }
      userErrors {
        ...UserError
      }
    }
  }
  ${UserError}
  ${Customer}
`;

export const CUSTOMER_ERASE = /* GraphQL */ `
  mutation customerRequestDataErasure($customerId: ID!) {
    customerRequestDataErasure(customerId: $customerId) {
      customerId
      userErrors {
        ...UserError
      }
    }
  }
  ${UserError}
`;
