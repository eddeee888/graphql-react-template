import type { MoneyV2 } from './Globals';
import type * as Types from './shared.generated';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GetOrder_order_totalPriceSet_shopMoney = MoneyV2;

export type GetOrder_order_totalPriceSet = { shopMoney: GetOrder_order_totalPriceSet_shopMoney };

export type GetOrder_order_lineItems_nodes_discountedUnitPriceSet_shopMoney = { amount: string, currencyCode: Types.CurrencyCode };

export type GetOrder_order_lineItems_nodes_discountedUnitPriceSet = { shopMoney: GetOrder_order_lineItems_nodes_discountedUnitPriceSet_shopMoney };

export type GetOrder_order_lineItems_nodes = { title: string, variantTitle: string | null, quantity: number, sku: string | null, discountedUnitPriceSet: GetOrder_order_lineItems_nodes_discountedUnitPriceSet };

export type GetOrder_order_lineItems = { nodes: Array<GetOrder_order_lineItems_nodes> };

export type GetOrder_order = { id: string, legacyResourceId: bigint, name: string, email: string | null, createdAt: string, displayFinancialStatus: Types.OrderDisplayFinancialStatus | null, tags: Array<string>, totalPriceSet: GetOrder_order_totalPriceSet, lineItems: GetOrder_order_lineItems };

export type GetOrder = { order: GetOrder_order | null };


export type GetOrderVariables = Exact<{
  id: string | number;
}>;
