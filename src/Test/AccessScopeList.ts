
export const GET_ACCESS_SCOPE_LIST = /* GraphQL */ `
  query AccessScopeList {
    currentAppInstallation {
      accessScopes {
        handle
      }
    }
  }
`;
