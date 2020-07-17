/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEnglishInput = {
  id?: string | null,
  title: string,
  img: string,
  uri: string,
  owner?: string | null,
  _version?: number | null,
};

export type ModelEnglishConditionInput = {
  title?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  and?: Array< ModelEnglishConditionInput | null > | null,
  or?: Array< ModelEnglishConditionInput | null > | null,
  not?: ModelEnglishConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateEnglishInput = {
  id: string,
  title?: string | null,
  img?: string | null,
  uri?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteEnglishInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelEnglishFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEnglishFilterInput | null > | null,
  or?: Array< ModelEnglishFilterInput | null > | null,
  not?: ModelEnglishFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateEnglishMutationVariables = {
  input: CreateEnglishInput,
  condition?: ModelEnglishConditionInput | null,
};

export type CreateEnglishMutation = {
  createEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    img: string,
    uri: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEnglishMutationVariables = {
  input: UpdateEnglishInput,
  condition?: ModelEnglishConditionInput | null,
};

export type UpdateEnglishMutation = {
  updateEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    img: string,
    uri: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEnglishMutationVariables = {
  input: DeleteEnglishInput,
  condition?: ModelEnglishConditionInput | null,
};

export type DeleteEnglishMutation = {
  deleteEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    img: string,
    uri: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncEnglishesQueryVariables = {
  filter?: ModelEnglishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEnglishesQuery = {
  syncEnglishes:  {
    __typename: "ModelEnglishConnection",
    items:  Array< {
      __typename: "English",
      id: string,
      title: string,
      img: string,
      uri: string,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetEnglishQueryVariables = {
  id: string,
};

export type GetEnglishQuery = {
  getEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    img: string,
    uri: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEnglishsQueryVariables = {
  filter?: ModelEnglishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnglishsQuery = {
  listEnglishs:  {
    __typename: "ModelEnglishConnection",
    items:  Array< {
      __typename: "English",
      id: string,
      title: string,
      img: string,
      uri: string,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateEnglishSubscription = {
  onCreateEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    img: string,
    uri: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEnglishSubscription = {
  onUpdateEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    img: string,
    uri: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEnglishSubscription = {
  onDeleteEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    img: string,
    uri: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
