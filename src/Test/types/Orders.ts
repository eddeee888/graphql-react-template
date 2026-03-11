import type { MoneyV2, PageInfo } from './Globals';
import type * as Types from './shared.generated';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GetOrders_orders_nodes_totalPriceSet_shopMoney = MoneyV2;

export type GetOrders_orders_nodes_totalPriceSet = { shopMoney: GetOrders_orders_nodes_totalPriceSet_shopMoney };

export type GetOrders_orders_nodes_lineItems_nodes_discountedUnitPriceSet_shopMoney = { amount: string, currencyCode: Types.CurrencyCode };

export type GetOrders_orders_nodes_lineItems_nodes_discountedUnitPriceSet = { shopMoney: GetOrders_orders_nodes_lineItems_nodes_discountedUnitPriceSet_shopMoney };

export type GetOrders_orders_nodes_lineItems_nodes = { title: string, variantTitle: string | null, quantity: number, sku: string | null, discountedUnitPriceSet: GetOrders_orders_nodes_lineItems_nodes_discountedUnitPriceSet };

export type GetOrders_orders_nodes_lineItems = { nodes: Array<GetOrders_orders_nodes_lineItems_nodes> };

export type GetOrders_orders_nodes = { id: string, legacyResourceId: bigint, name: string, email: string | null, createdAt: string, displayFinancialStatus: Types.OrderDisplayFinancialStatus | null, tags: Array<string>, totalPriceSet: GetOrders_orders_nodes_totalPriceSet, lineItems: GetOrders_orders_nodes_lineItems };

export type GetOrders_orders_pageInfo = PageInfo;

export type GetOrders_orders = { nodes: Array<GetOrders_orders_nodes>, pageInfo: GetOrders_orders_pageInfo };

export type GetOrders = { orders: GetOrders_orders };


export type GetOrdersVariables = Exact<{
  first: number;
  query?: string | null | undefined;
  after?: string | null | undefined;
}>;
