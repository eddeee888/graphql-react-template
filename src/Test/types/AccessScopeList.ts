type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type AccessScopeList_currentAppInstallation_accessScopes = { handle: string };

export type AccessScopeList_currentAppInstallation = { accessScopes: Array<AccessScopeList_currentAppInstallation_accessScopes> };

export type AccessScopeList = { currentAppInstallation: AccessScopeList_currentAppInstallation };


export type AccessScopeListVariables = Exact<{ [key: string]: never; }>;
