export const MoneyV2 = /* GraphQL */ `
  fragment MoneyV2 on MoneyV2 {
    amount
    currencyCode
  }
`;

const GiftCard = /* GraphQL */ `
  fragment GiftCard on GiftCard {
    id
    customer {
      defaultEmailAddress {
        emailAddress
      }
    }
    balance {
      ...MoneyV2
    }
  }
`;

const GiftCardUserError = /* GraphQL */ `
  fragment GiftCardUserError on GiftCardUserError {
    code
    field
    message
  }
`;

export const GIFT_CARD_CREATE = /* GraphQL */ `
  mutation GiftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input) {
      giftCard {
        ...GiftCard
      }
      giftCardCode
      userErrors {
        ...GiftCardUserError
      }
    }
  }
`;
