import type * as Types from './shared.generated';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GetShop_shop = { name: string, currencyCode: Types.CurrencyCode };

export type GetShop = { shop: GetShop_shop };


export type GetShopVariables = Exact<{ [key: string]: never; }>;
