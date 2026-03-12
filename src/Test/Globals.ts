export const SelectedOption = /* GraphQL */ `
  fragment SelectedOption on SelectedOption {
    name
    value
  }
`;

export const Metafield = /* GraphQL */ `
  fragment Metafield on Metafield {
    key
    value
  }
`;

export const Image = /* GraphQL */ `
  fragment Image on Image {
    id
    url
  }
`;

export const PageInfo = /* GraphQL */ `
  fragment PageInfo on PageInfo {
    endCursor
    hasNextPage
  }
`;

export const MoneyV2 = /* GraphQL */ `
  fragment MoneyV2 on MoneyV2 {
    amount
    currencyCode
  }
`;

export const UserError = /* GraphQL */ `
  fragment UserError on DisplayableError {
    field
    message
  }
`;

export const Media = /* GraphQL */ `
  fragment Media on Media {
    ... on MediaImage {
      mediaContentType
      id
      image {
        ...Image
      }
    }
    ... on Video {
      mediaContentType
      id
      sources {
        url
        format
        height
        width
      }
    }
    ... on ExternalVideo {
      mediaContentType
      id
      embedUrl
      host
    }
    ... on Model3d {
      mediaContentType
      id
      sources {
        url
        format
      }
    }
  }
  ${Image}
`;
