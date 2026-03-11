import type { Image, Media_ExternalVideo, Media_MediaImage, Media_Model3d, Media_Video, SelectedOption, UserError_ProductVariantsBulkUpdateUserError } from './Globals';
import type * as Types from './shared.generated';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Product = { id: string, title: string };

export type ProductVariant_inventoryItem_measurement_weight = { unit: Types.WeightUnit, value: number };

export type ProductVariant_inventoryItem_measurement = { id: string, weight: ProductVariant_inventoryItem_measurement_weight | null };

export type ProductVariant_inventoryItem = { id: string, measurement: ProductVariant_inventoryItem_measurement };

export type ProductVariant_product = Product;

export type ProductVariant_image = Image;

export type ProductVariant_media_edges_node_ExternalVideo = Media_ExternalVideo;

export type ProductVariant_media_edges_node_MediaImage = Media_MediaImage;

export type ProductVariant_media_edges_node_Model3d = Media_Model3d;

export type ProductVariant_media_edges_node_Video = Media_Video;

export type ProductVariant_media_edges_node =
  | ProductVariant_media_edges_node_ExternalVideo
  | ProductVariant_media_edges_node_MediaImage
  | ProductVariant_media_edges_node_Model3d
  | ProductVariant_media_edges_node_Video
;

export type ProductVariant_media_edges = { node: ProductVariant_media_edges_node };

export type ProductVariant_media = { edges: Array<ProductVariant_media_edges> };

export type ProductVariant_selectedOptions = SelectedOption;

export type ProductVariant = { id: string, title: string, sku: string | null, compareAtPrice: string | null, price: string, inventoryQuantity: number | null, inventoryPolicy: Types.ProductVariantInventoryPolicy, inventoryItem: ProductVariant_inventoryItem, product: ProductVariant_product, image: ProductVariant_image | null, media: ProductVariant_media, selectedOptions: Array<ProductVariant_selectedOptions> };

export type GetProductVariants_productVariants_nodes = ProductVariant;

export type GetProductVariants_productVariants = { nodes: Array<GetProductVariants_productVariants_nodes> };

export type GetProductVariants = { productVariants: GetProductVariants_productVariants };


export type GetProductVariantsVariables = Exact<{
  first?: number | null | undefined;
  query?: string | null | undefined;
}>;

export type GetProductVariant_productVariant = ProductVariant;

export type GetProductVariant = { productVariant: GetProductVariant_productVariant | null };


export type GetProductVariantVariables = Exact<{
  id: string | number;
}>;

export type ProductVariantsBulkUpdate_productVariantsBulkUpdate_productVariants = ProductVariant;

export type ProductVariantsBulkUpdate_productVariantsBulkUpdate_userErrors = UserError_ProductVariantsBulkUpdateUserError;

export type ProductVariantsBulkUpdate_productVariantsBulkUpdate = { productVariants: Array<ProductVariantsBulkUpdate_productVariantsBulkUpdate_productVariants> | null, userErrors: Array<ProductVariantsBulkUpdate_productVariantsBulkUpdate_userErrors> };

export type ProductVariantsBulkUpdate = { productVariantsBulkUpdate: ProductVariantsBulkUpdate_productVariantsBulkUpdate | null };


export type ProductVariantsBulkUpdateVariables = Exact<{
  productId: string | number;
  variants: Array<Types.ProductVariantsBulkInput> | Types.ProductVariantsBulkInput;
}>;
