import type * as Types from './shared.generated';

export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type SelectedOption = { name: string, value: string };

export type Metafield = { key: string, value: string };

export type Image = { id: string | null, url: string };

export type PageInfo = { endCursor: string | null, hasNextPage: boolean };

export type MoneyV2 = { amount: string, currencyCode: Types.CurrencyCode };

export type UserError_U5gEIAPSqB5jJamwEZqtaKMAudcQ3EE0Q9MhXPyUyew = { field: Array<string> | null, message: string };

export type UserError_GiibpDGQtKJ8ic2T2U3lOvYMh6fk7hwTFKbmiEmaeI = { field: Array<string> | null, message: string };

export type UserError_bxzMDLh5w1fJFJ5JWgxCjlB87bPItiTDljneZSXtO4 = { field: Array<string> | null, message: string };

export type UserError_gaB2Z1k1PnSgzeb4peWSN54RXuLimA8Hiy4y5aGsLMI = { field: Array<string> | null, message: string };

export type UserError_UL7MYDgh5PChe9bvbBBbDnmAxnXcXqkBNU2ZMz1G0 = { field: Array<string> | null, message: string };

export type UserError_PqWw9SXKib01zEZiqVpksfszvkIUEyJ587EayAE = { field: Array<string> | null, message: string };

export type UserError_bC033n5VEzHbSdopvlnDeqkGnJgZAnbOIWg9WOk = { field: Array<string> | null, message: string };

export type UserError_zrT0zdeCGMbs2Ffgs4xZMrvaV5NjVZCOhyzJ6wLeqAU = { field: Array<string> | null, message: string };

export type UserError_9HgZzWRiFskoNK2roHoU4wgwrOOXGcmTOtcUx7knDos = { field: Array<string> | null, message: string };

export type UserError =
  | UserError_U5gEIAPSqB5jJamwEZqtaKMAudcQ3EE0Q9MhXPyUyew
  | UserError_GiibpDGQtKJ8ic2T2U3lOvYMh6fk7hwTFKbmiEmaeI
  | UserError_bxzMDLh5w1fJFJ5JWgxCjlB87bPItiTDljneZSXtO4
  | UserError_gaB2Z1k1PnSgzeb4peWSN54RXuLimA8Hiy4y5aGsLMI
  | UserError_UL7MYDgh5PChe9bvbBBbDnmAxnXcXqkBNU2ZMz1G0
  | UserError_PqWw9SXKib01zEZiqVpksfszvkIUEyJ587EayAE
  | UserError_bC033n5VEzHbSdopvlnDeqkGnJgZAnbOIWg9WOk
  | UserError_zrT0zdeCGMbs2Ffgs4xZMrvaV5NjVZCOhyzJ6wLeqAU
  | UserError_9HgZzWRiFskoNK2roHoU4wgwrOOXGcmTOtcUx7knDos
;

export type Media_MediaImage_image = Image;

export type Media_Model3d_sources = { url: string, format: string };

export type Media_Video_sources = { url: string, format: string, height: number, width: number };

export type Media_ExternalVideo = { mediaContentType: Types.MediaContentType, id: string, embedUrl: string, host: Types.MediaHost };

export type Media_MediaImage = { mediaContentType: Types.MediaContentType, id: string, image: Media_MediaImage_image | null };

export type Media_Model3d = { mediaContentType: Types.MediaContentType, id: string, sources: Array<Media_Model3d_sources> };

export type Media_Video = { mediaContentType: Types.MediaContentType, id: string, sources: Array<Media_Video_sources> };

export type Media =
  | Media_ExternalVideo
  | Media_MediaImage
  | Media_Model3d
  | Media_Video
;
