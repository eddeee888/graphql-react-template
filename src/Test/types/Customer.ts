import type { UserError_UserError, UserError_CustomerRequestDataErasureUserError } from './Globals';
import type * as Types from './shared.generated';

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Customer = { id: string, tags: Array<string> };

export type GetCustomersFull_customers_nodes_addresses = { id: string, firstName: string | null, lastName: string | null, address1: string | null, city: string | null, province: string | null, country: string | null, zip: string | null, phone: string | null, name: string | null, provinceCode: string | null, countryCodeV2: Types.CountryCode | null };

export type GetCustomersFull_customers_nodes_defaultAddress = { id: string, address1: string | null, city: string | null, province: string | null, country: string | null, zip: string | null, phone: string | null, provinceCode: string | null, countryCodeV2: Types.CountryCode | null };

export type GetCustomersFull_customers_nodes_defaultEmailAddress = { validFormat: boolean };

export type GetCustomersFull_customers_nodes = (
  { firstName: string | null, lastName: string | null, numberOfOrders: bigint, addresses: Array<GetCustomersFull_customers_nodes_addresses>, defaultAddress: GetCustomersFull_customers_nodes_defaultAddress | null, defaultEmailAddress: GetCustomersFull_customers_nodes_defaultEmailAddress | null }
  & Customer
);

export type GetCustomersFull_customers = { nodes: Array<GetCustomersFull_customers_nodes> };

export type GetCustomersFull = { customers: GetCustomersFull_customers };


export type GetCustomersFullVariables = Exact<{
  first?: number | null | undefined;
  query?: string | null | undefined;
}>;

export type GetCustomers_customers_nodes = Customer;

export type GetCustomers_customers = { nodes: Array<GetCustomers_customers_nodes> };

export type GetCustomers = { customers: GetCustomers_customers };


export type GetCustomersVariables = Exact<{
  first?: number | null | undefined;
  query?: string | null | undefined;
}>;

export type TagsAdd_tagsAdd_node_SfPPpXSCbRAJfPD2tiyxmiySvUavqA3bOnI8r3imRc = { id: string };

export type TagsAdd_tagsAdd_node_R8mDZhK7Aafbvzil6y4LY78YZEi6kMkevOUDj5CPM = { id: string };

export type TagsAdd_tagsAdd_node_V6u3pyiFEdYpS8crmHeSf34dOYyNB3K8sLt8kxAEN7I = { id: string };

export type TagsAdd_tagsAdd_node_Thgdgmduo1ISZB92NfzlNkw4VHWBdZKpg7h0KZoeVI = { id: string };

export type TagsAdd_tagsAdd_node_BFTBDrWvQisuxmJStKkaKA4TaKPDyma0Ckppil778w = { id: string };

export type TagsAdd_tagsAdd_node_8pPVZ40PcsflwmFVGvtjeaEfzxC2dQ4fvin7PMDU = { id: string };

export type TagsAdd_tagsAdd_node_o05F5sHClupgIeJTOQnrTHUdaN09rPSnm5k748UK8 = { id: string };

export type TagsAdd_tagsAdd_node_Bamx9I7aRtoHL3GpIEuRzVWiWxqFbOUqD0YeHgt5Q = { id: string };

export type TagsAdd_tagsAdd_node_1lPmJke2jPqvbpvTbD3QqMRMoTx5DUGyeCWR45CU0 = { id: string };

export type TagsAdd_tagsAdd_node_Wmn5ccSQ3gR8XrKB9k3Wf19YlI7he39PI7I1VDrs = { id: string };

export type TagsAdd_tagsAdd_node =
  | TagsAdd_tagsAdd_node_SfPPpXSCbRAJfPD2tiyxmiySvUavqA3bOnI8r3imRc
  | TagsAdd_tagsAdd_node_R8mDZhK7Aafbvzil6y4LY78YZEi6kMkevOUDj5CPM
  | TagsAdd_tagsAdd_node_V6u3pyiFEdYpS8crmHeSf34dOYyNB3K8sLt8kxAEN7I
  | TagsAdd_tagsAdd_node_Thgdgmduo1ISZB92NfzlNkw4VHWBdZKpg7h0KZoeVI
  | TagsAdd_tagsAdd_node_BFTBDrWvQisuxmJStKkaKA4TaKPDyma0Ckppil778w
  | TagsAdd_tagsAdd_node_8pPVZ40PcsflwmFVGvtjeaEfzxC2dQ4fvin7PMDU
  | TagsAdd_tagsAdd_node_o05F5sHClupgIeJTOQnrTHUdaN09rPSnm5k748UK8
  | TagsAdd_tagsAdd_node_Bamx9I7aRtoHL3GpIEuRzVWiWxqFbOUqD0YeHgt5Q
  | TagsAdd_tagsAdd_node_1lPmJke2jPqvbpvTbD3QqMRMoTx5DUGyeCWR45CU0
  | TagsAdd_tagsAdd_node_Wmn5ccSQ3gR8XrKB9k3Wf19YlI7he39PI7I1VDrs
;

export type TagsAdd_tagsAdd_userErrors = UserError_UserError;

export type TagsAdd_tagsAdd = { node: TagsAdd_tagsAdd_node | null, userErrors: Array<TagsAdd_tagsAdd_userErrors> };

export type TagsAdd = { tagsAdd: TagsAdd_tagsAdd | null };


export type TagsAddVariables = Exact<{
  id: string | number;
  tags: Array<string> | string;
}>;

export type TagsRemove_tagsRemove_node_SfPPpXSCbRAJfPD2tiyxmiySvUavqA3bOnI8r3imRc = { id: string };

export type TagsRemove_tagsRemove_node_R8mDZhK7Aafbvzil6y4LY78YZEi6kMkevOUDj5CPM = { id: string };

export type TagsRemove_tagsRemove_node_V6u3pyiFEdYpS8crmHeSf34dOYyNB3K8sLt8kxAEN7I = { id: string };

export type TagsRemove_tagsRemove_node_Thgdgmduo1ISZB92NfzlNkw4VHWBdZKpg7h0KZoeVI = { id: string };

export type TagsRemove_tagsRemove_node_BFTBDrWvQisuxmJStKkaKA4TaKPDyma0Ckppil778w = { id: string };

export type TagsRemove_tagsRemove_node_8pPVZ40PcsflwmFVGvtjeaEfzxC2dQ4fvin7PMDU = { id: string };

export type TagsRemove_tagsRemove_node_o05F5sHClupgIeJTOQnrTHUdaN09rPSnm5k748UK8 = { id: string };

export type TagsRemove_tagsRemove_node_Bamx9I7aRtoHL3GpIEuRzVWiWxqFbOUqD0YeHgt5Q = { id: string };

export type TagsRemove_tagsRemove_node_1lPmJke2jPqvbpvTbD3QqMRMoTx5DUGyeCWR45CU0 = { id: string };

export type TagsRemove_tagsRemove_node_Wmn5ccSQ3gR8XrKB9k3Wf19YlI7he39PI7I1VDrs = { id: string };

export type TagsRemove_tagsRemove_node =
  | TagsRemove_tagsRemove_node_SfPPpXSCbRAJfPD2tiyxmiySvUavqA3bOnI8r3imRc
  | TagsRemove_tagsRemove_node_R8mDZhK7Aafbvzil6y4LY78YZEi6kMkevOUDj5CPM
  | TagsRemove_tagsRemove_node_V6u3pyiFEdYpS8crmHeSf34dOYyNB3K8sLt8kxAEN7I
  | TagsRemove_tagsRemove_node_Thgdgmduo1ISZB92NfzlNkw4VHWBdZKpg7h0KZoeVI
  | TagsRemove_tagsRemove_node_BFTBDrWvQisuxmJStKkaKA4TaKPDyma0Ckppil778w
  | TagsRemove_tagsRemove_node_8pPVZ40PcsflwmFVGvtjeaEfzxC2dQ4fvin7PMDU
  | TagsRemove_tagsRemove_node_o05F5sHClupgIeJTOQnrTHUdaN09rPSnm5k748UK8
  | TagsRemove_tagsRemove_node_Bamx9I7aRtoHL3GpIEuRzVWiWxqFbOUqD0YeHgt5Q
  | TagsRemove_tagsRemove_node_1lPmJke2jPqvbpvTbD3QqMRMoTx5DUGyeCWR45CU0
  | TagsRemove_tagsRemove_node_Wmn5ccSQ3gR8XrKB9k3Wf19YlI7he39PI7I1VDrs
;

export type TagsRemove_tagsRemove_userErrors = UserError_UserError;

export type TagsRemove_tagsRemove = { node: TagsRemove_tagsRemove_node | null, userErrors: Array<TagsRemove_tagsRemove_userErrors> };

export type TagsRemove = { tagsRemove: TagsRemove_tagsRemove | null };


export type TagsRemoveVariables = Exact<{
  id: string | number;
  tags: Array<string> | string;
}>;

export type CustomerCreate_customerCreate_customer = Customer;

export type CustomerCreate_customerCreate_userErrors = UserError_UserError;

export type CustomerCreate_customerCreate = { customer: CustomerCreate_customerCreate_customer | null, userErrors: Array<CustomerCreate_customerCreate_userErrors> };

export type CustomerCreate = { customerCreate: CustomerCreate_customerCreate | null };


export type CustomerCreateVariables = Exact<{
  input: Types.CustomerInput;
}>;

export type customerRequestDataErasure_customerRequestDataErasure_userErrors = UserError_CustomerRequestDataErasureUserError;

export type customerRequestDataErasure_customerRequestDataErasure = { customerId: string | null, userErrors: Array<customerRequestDataErasure_customerRequestDataErasure_userErrors> };

export type customerRequestDataErasure = { customerRequestDataErasure: customerRequestDataErasure_customerRequestDataErasure | null };


export type customerRequestDataErasureVariables = Exact<{
  customerId: string | number;
}>;
