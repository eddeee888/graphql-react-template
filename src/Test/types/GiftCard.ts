import type { MoneyV2 } from './Globals';
import type * as Types from './shared.generated';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GiftCard_customer_defaultEmailAddress = { emailAddress: string };

export type GiftCard_customer = { defaultEmailAddress: GiftCard_customer_defaultEmailAddress | null };

export type GiftCard_balance = MoneyV2;

export type GiftCard = { id: string, customer: GiftCard_customer | null, balance: GiftCard_balance };

export type GiftCardUserError = { code: Types.GiftCardErrorCode | null, field: Array<string> | null, message: string };

export type GiftCardCreate_giftCardCreate_giftCard = GiftCard;

export type GiftCardCreate_giftCardCreate_userErrors = GiftCardUserError;

export type GiftCardCreate_giftCardCreate = { giftCardCode: string | null, giftCard: GiftCardCreate_giftCardCreate_giftCard | null, userErrors: Array<GiftCardCreate_giftCardCreate_userErrors> };

export type GiftCardCreate = { giftCardCreate: GiftCardCreate_giftCardCreate | null };


export type GiftCardCreateVariables = Exact<{
  input: Types.GiftCardCreateInput;
}>;
