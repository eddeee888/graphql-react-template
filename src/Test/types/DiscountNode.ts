type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type DiscountMetafield = { id: string, namespace: string, key: string, value: string };

export type GetDiscountNodes_discountNodes_edges_node_discount_DiscountAutomaticApp = { title: string };

export type GetDiscountNodes_discountNodes_edges_node_metafields_edges_node = DiscountMetafield;

export type GetDiscountNodes_discountNodes_edges_node_metafields_edges = { node: GetDiscountNodes_discountNodes_edges_node_metafields_edges_node };

export type GetDiscountNodes_discountNodes_edges_node_metafields = { edges: Array<GetDiscountNodes_discountNodes_edges_node_metafields_edges> };

export type GetDiscountNodes_discountNodes_edges_node = { id: string, discount: GetDiscountNodes_discountNodes_edges_node_discount_DiscountAutomaticApp, metafields: GetDiscountNodes_discountNodes_edges_node_metafields };

export type GetDiscountNodes_discountNodes_edges = { node: GetDiscountNodes_discountNodes_edges_node };

export type GetDiscountNodes_discountNodes = { edges: Array<GetDiscountNodes_discountNodes_edges> };

export type GetDiscountNodes = { discountNodes: GetDiscountNodes_discountNodes };


export type GetDiscountNodesVariables = Exact<{
  firstNodes: number;
  firstMetafields: number;
}>;
