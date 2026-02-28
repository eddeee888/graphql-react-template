type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type UserError = { field: Array<string> | null, message: string };

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

export type TagsAdd_tagsAdd_userErrors = UserError;

export type TagsAdd_tagsAdd = { node: TagsAdd_tagsAdd_node | null, userErrors: Array<TagsAdd_tagsAdd_userErrors> };

export type TagsAdd = { tagsAdd: TagsAdd_tagsAdd | null };


export type TagsAddVariables = Exact<{
  id: string | number;
  tags: Array<string> | string;
}>;
