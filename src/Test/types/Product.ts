import type { Product, ProductVariant } from './ProductVariant';
import type { Metafield } from './Globals';
import type * as Types from './shared.generated';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GetProductWithVariants_product_variants_nodes = ProductVariant;

export type GetProductWithVariants_product_variants = { nodes: Array<GetProductWithVariants_product_variants_nodes> };

export type GetProductWithVariants_product = (
  { variants: GetProductWithVariants_product_variants }
  & Product
);

export type GetProductWithVariants = { product: GetProductWithVariants_product | null };


export type GetProductWithVariantsVariables = Exact<{
  id: string | number;
  first: number;
}>;

export type GetProductWithMetafield_product_metafield = Metafield;

export type GetProductWithMetafield_product = (
  { metafield: GetProductWithMetafield_product_metafield | null }
  & Product
);

export type GetProductWithMetafield = { product: GetProductWithMetafield_product | null };


export type GetProductWithMetafieldVariables = Exact<{
  id: string | number;
  namespace: string;
  key: string;
}>;
