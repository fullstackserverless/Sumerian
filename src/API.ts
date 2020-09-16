/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  avatar?: S3ObjectInput | null,
  owner?: string | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelProfileConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
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

export type UpdateProfileInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  avatar?: S3ObjectInput | null,
  owner?: string | null,
};

export type DeleteProfileInput = {
  id?: string | null,
};

export type CreateExamInput = {
  id?: string | null,
  english?: boolean | null,
  javaScript?: boolean | null,
  reactNative?: boolean | null,
  typeScript?: boolean | null,
  amplify?: boolean | null,
  owner?: string | null,
};

export type ModelExamConditionInput = {
  english?: ModelBooleanInput | null,
  javaScript?: ModelBooleanInput | null,
  reactNative?: ModelBooleanInput | null,
  typeScript?: ModelBooleanInput | null,
  amplify?: ModelBooleanInput | null,
  and?: Array< ModelExamConditionInput | null > | null,
  or?: Array< ModelExamConditionInput | null > | null,
  not?: ModelExamConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateExamInput = {
  id: string,
  english?: boolean | null,
  javaScript?: boolean | null,
  reactNative?: boolean | null,
  typeScript?: boolean | null,
  amplify?: boolean | null,
  owner?: string | null,
};

export type DeleteExamInput = {
  id?: string | null,
};

export type CreateEnglishInput = {
  id?: string | null,
  title: string,
  description: string,
  img: string,
  uri: string,
  json?: string | null,
  owner?: string | null,
};

export type ModelEnglishConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  and?: Array< ModelEnglishConditionInput | null > | null,
  or?: Array< ModelEnglishConditionInput | null > | null,
  not?: ModelEnglishConditionInput | null,
};

export type UpdateEnglishInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  img?: string | null,
  uri?: string | null,
  json?: string | null,
  owner?: string | null,
};

export type DeleteEnglishInput = {
  id?: string | null,
};

export type CreateJavaScriptInput = {
  id?: string | null,
  title: string,
  description: string,
  img: string,
  uri: string,
  json?: string | null,
  owner?: string | null,
};

export type ModelJavaScriptConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  and?: Array< ModelJavaScriptConditionInput | null > | null,
  or?: Array< ModelJavaScriptConditionInput | null > | null,
  not?: ModelJavaScriptConditionInput | null,
};

export type UpdateJavaScriptInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  img?: string | null,
  uri?: string | null,
  json?: string | null,
  owner?: string | null,
};

export type DeleteJavaScriptInput = {
  id?: string | null,
};

export type CreateReactNativeInput = {
  id?: string | null,
  title: string,
  description: string,
  img: string,
  uri: string,
  json?: string | null,
  owner?: string | null,
};

export type ModelReactNativeConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  and?: Array< ModelReactNativeConditionInput | null > | null,
  or?: Array< ModelReactNativeConditionInput | null > | null,
  not?: ModelReactNativeConditionInput | null,
};

export type UpdateReactNativeInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  img?: string | null,
  uri?: string | null,
  json?: string | null,
  owner?: string | null,
};

export type DeleteReactNativeInput = {
  id?: string | null,
};

export type CreateTypeScriptInput = {
  id?: string | null,
  title: string,
  description: string,
  img: string,
  uri: string,
  json?: string | null,
  owner?: string | null,
};

export type ModelTypeScriptConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  and?: Array< ModelTypeScriptConditionInput | null > | null,
  or?: Array< ModelTypeScriptConditionInput | null > | null,
  not?: ModelTypeScriptConditionInput | null,
};

export type UpdateTypeScriptInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  img?: string | null,
  uri?: string | null,
  json?: string | null,
  owner?: string | null,
};

export type DeleteTypeScriptInput = {
  id?: string | null,
};

export type CreateAmplifyInput = {
  id?: string | null,
  title: string,
  description: string,
  img: string,
  uri: string,
  json?: string | null,
  owner?: string | null,
};

export type ModelAmplifyConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  and?: Array< ModelAmplifyConditionInput | null > | null,
  or?: Array< ModelAmplifyConditionInput | null > | null,
  not?: ModelAmplifyConditionInput | null,
};

export type UpdateAmplifyInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  img?: string | null,
  uri?: string | null,
  json?: string | null,
  owner?: string | null,
};

export type DeleteAmplifyInput = {
  id?: string | null,
};

export type CreateEnglishProgInput = {
  id?: string | null,
  doneId: string,
  owner?: string | null,
};

export type ModelEnglishProgConditionInput = {
  doneId?: ModelStringInput | null,
  and?: Array< ModelEnglishProgConditionInput | null > | null,
  or?: Array< ModelEnglishProgConditionInput | null > | null,
  not?: ModelEnglishProgConditionInput | null,
};

export type UpdateEnglishProgInput = {
  id: string,
  doneId?: string | null,
  owner?: string | null,
};

export type DeleteEnglishProgInput = {
  id?: string | null,
};

export type CreateJavaScriptProgInput = {
  id?: string | null,
  doneId: string,
  owner?: string | null,
};

export type ModelJavaScriptProgConditionInput = {
  doneId?: ModelStringInput | null,
  and?: Array< ModelJavaScriptProgConditionInput | null > | null,
  or?: Array< ModelJavaScriptProgConditionInput | null > | null,
  not?: ModelJavaScriptProgConditionInput | null,
};

export type UpdateJavaScriptProgInput = {
  id: string,
  doneId?: string | null,
  owner?: string | null,
};

export type DeleteJavaScriptProgInput = {
  id?: string | null,
};

export type CreateReactNativeProgInput = {
  id?: string | null,
  doneId: string,
  owner?: string | null,
};

export type ModelReactNativeProgConditionInput = {
  doneId?: ModelStringInput | null,
  and?: Array< ModelReactNativeProgConditionInput | null > | null,
  or?: Array< ModelReactNativeProgConditionInput | null > | null,
  not?: ModelReactNativeProgConditionInput | null,
};

export type UpdateReactNativeProgInput = {
  id: string,
  doneId?: string | null,
  owner?: string | null,
};

export type DeleteReactNativeProgInput = {
  id?: string | null,
};

export type CreateTypeScriptProgInput = {
  id?: string | null,
  doneId: string,
  owner?: string | null,
};

export type ModelTypeScriptProgConditionInput = {
  doneId?: ModelStringInput | null,
  and?: Array< ModelTypeScriptProgConditionInput | null > | null,
  or?: Array< ModelTypeScriptProgConditionInput | null > | null,
  not?: ModelTypeScriptProgConditionInput | null,
};

export type UpdateTypeScriptProgInput = {
  id: string,
  doneId?: string | null,
  owner?: string | null,
};

export type DeleteTypeScriptProgInput = {
  id?: string | null,
};

export type CreateAmplifyProgInput = {
  id?: string | null,
  doneId: string,
  owner?: string | null,
};

export type ModelAmplifyProgConditionInput = {
  doneId?: ModelStringInput | null,
  and?: Array< ModelAmplifyProgConditionInput | null > | null,
  or?: Array< ModelAmplifyProgConditionInput | null > | null,
  not?: ModelAmplifyProgConditionInput | null,
};

export type UpdateAmplifyProgInput = {
  id: string,
  doneId?: string | null,
  owner?: string | null,
};

export type DeleteAmplifyProgInput = {
  id?: string | null,
};

export type CreateMinimalVersionInput = {
  id?: string | null,
  build: string,
  owner?: string | null,
};

export type ModelMinimalVersionConditionInput = {
  build?: ModelStringInput | null,
  and?: Array< ModelMinimalVersionConditionInput | null > | null,
  or?: Array< ModelMinimalVersionConditionInput | null > | null,
  not?: ModelMinimalVersionConditionInput | null,
};

export type UpdateMinimalVersionInput = {
  id: string,
  build?: string | null,
  owner?: string | null,
};

export type DeleteMinimalVersionInput = {
  id?: string | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
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

export type ModelExamFilterInput = {
  id?: ModelIDInput | null,
  english?: ModelBooleanInput | null,
  javaScript?: ModelBooleanInput | null,
  reactNative?: ModelBooleanInput | null,
  typeScript?: ModelBooleanInput | null,
  amplify?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelExamFilterInput | null > | null,
  or?: Array< ModelExamFilterInput | null > | null,
  not?: ModelExamFilterInput | null,
};

export type ModelEnglishFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEnglishFilterInput | null > | null,
  or?: Array< ModelEnglishFilterInput | null > | null,
  not?: ModelEnglishFilterInput | null,
};

export type ModelJavaScriptFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelJavaScriptFilterInput | null > | null,
  or?: Array< ModelJavaScriptFilterInput | null > | null,
  not?: ModelJavaScriptFilterInput | null,
};

export type ModelReactNativeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelReactNativeFilterInput | null > | null,
  or?: Array< ModelReactNativeFilterInput | null > | null,
  not?: ModelReactNativeFilterInput | null,
};

export type ModelTypeScriptFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTypeScriptFilterInput | null > | null,
  or?: Array< ModelTypeScriptFilterInput | null > | null,
  not?: ModelTypeScriptFilterInput | null,
};

export type ModelAmplifyFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  json?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAmplifyFilterInput | null > | null,
  or?: Array< ModelAmplifyFilterInput | null > | null,
  not?: ModelAmplifyFilterInput | null,
};

export type ModelEnglishProgFilterInput = {
  id?: ModelIDInput | null,
  doneId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEnglishProgFilterInput | null > | null,
  or?: Array< ModelEnglishProgFilterInput | null > | null,
  not?: ModelEnglishProgFilterInput | null,
};

export type ModelJavaScriptProgFilterInput = {
  id?: ModelIDInput | null,
  doneId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelJavaScriptProgFilterInput | null > | null,
  or?: Array< ModelJavaScriptProgFilterInput | null > | null,
  not?: ModelJavaScriptProgFilterInput | null,
};

export type ModelReactNativeProgFilterInput = {
  id?: ModelIDInput | null,
  doneId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelReactNativeProgFilterInput | null > | null,
  or?: Array< ModelReactNativeProgFilterInput | null > | null,
  not?: ModelReactNativeProgFilterInput | null,
};

export type ModelTypeScriptProgFilterInput = {
  id?: ModelIDInput | null,
  doneId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTypeScriptProgFilterInput | null > | null,
  or?: Array< ModelTypeScriptProgFilterInput | null > | null,
  not?: ModelTypeScriptProgFilterInput | null,
};

export type ModelAmplifyProgFilterInput = {
  id?: ModelIDInput | null,
  doneId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAmplifyProgFilterInput | null > | null,
  or?: Array< ModelAmplifyProgFilterInput | null > | null,
  not?: ModelAmplifyProgFilterInput | null,
};

export type ModelMinimalVersionFilterInput = {
  id?: ModelIDInput | null,
  build?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelMinimalVersionFilterInput | null > | null,
  or?: Array< ModelMinimalVersionFilterInput | null > | null,
  not?: ModelMinimalVersionFilterInput | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExamMutationVariables = {
  input: CreateExamInput,
  condition?: ModelExamConditionInput | null,
};

export type CreateExamMutation = {
  createExam:  {
    __typename: "Exam",
    id: string,
    english: boolean | null,
    javaScript: boolean | null,
    reactNative: boolean | null,
    typeScript: boolean | null,
    amplify: boolean | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExamMutationVariables = {
  input: UpdateExamInput,
  condition?: ModelExamConditionInput | null,
};

export type UpdateExamMutation = {
  updateExam:  {
    __typename: "Exam",
    id: string,
    english: boolean | null,
    javaScript: boolean | null,
    reactNative: boolean | null,
    typeScript: boolean | null,
    amplify: boolean | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExamMutationVariables = {
  input: DeleteExamInput,
  condition?: ModelExamConditionInput | null,
};

export type DeleteExamMutation = {
  deleteExam:  {
    __typename: "Exam",
    id: string,
    english: boolean | null,
    javaScript: boolean | null,
    reactNative: boolean | null,
    typeScript: boolean | null,
    amplify: boolean | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
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
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
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
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJavaScriptMutationVariables = {
  input: CreateJavaScriptInput,
  condition?: ModelJavaScriptConditionInput | null,
};

export type CreateJavaScriptMutation = {
  createJavaScript:  {
    __typename: "JavaScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJavaScriptMutationVariables = {
  input: UpdateJavaScriptInput,
  condition?: ModelJavaScriptConditionInput | null,
};

export type UpdateJavaScriptMutation = {
  updateJavaScript:  {
    __typename: "JavaScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJavaScriptMutationVariables = {
  input: DeleteJavaScriptInput,
  condition?: ModelJavaScriptConditionInput | null,
};

export type DeleteJavaScriptMutation = {
  deleteJavaScript:  {
    __typename: "JavaScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReactNativeMutationVariables = {
  input: CreateReactNativeInput,
  condition?: ModelReactNativeConditionInput | null,
};

export type CreateReactNativeMutation = {
  createReactNative:  {
    __typename: "ReactNative",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReactNativeMutationVariables = {
  input: UpdateReactNativeInput,
  condition?: ModelReactNativeConditionInput | null,
};

export type UpdateReactNativeMutation = {
  updateReactNative:  {
    __typename: "ReactNative",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReactNativeMutationVariables = {
  input: DeleteReactNativeInput,
  condition?: ModelReactNativeConditionInput | null,
};

export type DeleteReactNativeMutation = {
  deleteReactNative:  {
    __typename: "ReactNative",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTypeScriptMutationVariables = {
  input: CreateTypeScriptInput,
  condition?: ModelTypeScriptConditionInput | null,
};

export type CreateTypeScriptMutation = {
  createTypeScript:  {
    __typename: "TypeScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTypeScriptMutationVariables = {
  input: UpdateTypeScriptInput,
  condition?: ModelTypeScriptConditionInput | null,
};

export type UpdateTypeScriptMutation = {
  updateTypeScript:  {
    __typename: "TypeScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTypeScriptMutationVariables = {
  input: DeleteTypeScriptInput,
  condition?: ModelTypeScriptConditionInput | null,
};

export type DeleteTypeScriptMutation = {
  deleteTypeScript:  {
    __typename: "TypeScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAmplifyMutationVariables = {
  input: CreateAmplifyInput,
  condition?: ModelAmplifyConditionInput | null,
};

export type CreateAmplifyMutation = {
  createAmplify:  {
    __typename: "Amplify",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAmplifyMutationVariables = {
  input: UpdateAmplifyInput,
  condition?: ModelAmplifyConditionInput | null,
};

export type UpdateAmplifyMutation = {
  updateAmplify:  {
    __typename: "Amplify",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAmplifyMutationVariables = {
  input: DeleteAmplifyInput,
  condition?: ModelAmplifyConditionInput | null,
};

export type DeleteAmplifyMutation = {
  deleteAmplify:  {
    __typename: "Amplify",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEnglishProgMutationVariables = {
  input: CreateEnglishProgInput,
  condition?: ModelEnglishProgConditionInput | null,
};

export type CreateEnglishProgMutation = {
  createEnglishProg:  {
    __typename: "EnglishProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEnglishProgMutationVariables = {
  input: UpdateEnglishProgInput,
  condition?: ModelEnglishProgConditionInput | null,
};

export type UpdateEnglishProgMutation = {
  updateEnglishProg:  {
    __typename: "EnglishProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEnglishProgMutationVariables = {
  input: DeleteEnglishProgInput,
  condition?: ModelEnglishProgConditionInput | null,
};

export type DeleteEnglishProgMutation = {
  deleteEnglishProg:  {
    __typename: "EnglishProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJavaScriptProgMutationVariables = {
  input: CreateJavaScriptProgInput,
  condition?: ModelJavaScriptProgConditionInput | null,
};

export type CreateJavaScriptProgMutation = {
  createJavaScriptProg:  {
    __typename: "JavaScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJavaScriptProgMutationVariables = {
  input: UpdateJavaScriptProgInput,
  condition?: ModelJavaScriptProgConditionInput | null,
};

export type UpdateJavaScriptProgMutation = {
  updateJavaScriptProg:  {
    __typename: "JavaScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJavaScriptProgMutationVariables = {
  input: DeleteJavaScriptProgInput,
  condition?: ModelJavaScriptProgConditionInput | null,
};

export type DeleteJavaScriptProgMutation = {
  deleteJavaScriptProg:  {
    __typename: "JavaScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReactNativeProgMutationVariables = {
  input: CreateReactNativeProgInput,
  condition?: ModelReactNativeProgConditionInput | null,
};

export type CreateReactNativeProgMutation = {
  createReactNativeProg:  {
    __typename: "ReactNativeProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReactNativeProgMutationVariables = {
  input: UpdateReactNativeProgInput,
  condition?: ModelReactNativeProgConditionInput | null,
};

export type UpdateReactNativeProgMutation = {
  updateReactNativeProg:  {
    __typename: "ReactNativeProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReactNativeProgMutationVariables = {
  input: DeleteReactNativeProgInput,
  condition?: ModelReactNativeProgConditionInput | null,
};

export type DeleteReactNativeProgMutation = {
  deleteReactNativeProg:  {
    __typename: "ReactNativeProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTypeScriptProgMutationVariables = {
  input: CreateTypeScriptProgInput,
  condition?: ModelTypeScriptProgConditionInput | null,
};

export type CreateTypeScriptProgMutation = {
  createTypeScriptProg:  {
    __typename: "TypeScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTypeScriptProgMutationVariables = {
  input: UpdateTypeScriptProgInput,
  condition?: ModelTypeScriptProgConditionInput | null,
};

export type UpdateTypeScriptProgMutation = {
  updateTypeScriptProg:  {
    __typename: "TypeScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTypeScriptProgMutationVariables = {
  input: DeleteTypeScriptProgInput,
  condition?: ModelTypeScriptProgConditionInput | null,
};

export type DeleteTypeScriptProgMutation = {
  deleteTypeScriptProg:  {
    __typename: "TypeScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAmplifyProgMutationVariables = {
  input: CreateAmplifyProgInput,
  condition?: ModelAmplifyProgConditionInput | null,
};

export type CreateAmplifyProgMutation = {
  createAmplifyProg:  {
    __typename: "AmplifyProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAmplifyProgMutationVariables = {
  input: UpdateAmplifyProgInput,
  condition?: ModelAmplifyProgConditionInput | null,
};

export type UpdateAmplifyProgMutation = {
  updateAmplifyProg:  {
    __typename: "AmplifyProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAmplifyProgMutationVariables = {
  input: DeleteAmplifyProgInput,
  condition?: ModelAmplifyProgConditionInput | null,
};

export type DeleteAmplifyProgMutation = {
  deleteAmplifyProg:  {
    __typename: "AmplifyProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMinimalVersionMutationVariables = {
  input: CreateMinimalVersionInput,
  condition?: ModelMinimalVersionConditionInput | null,
};

export type CreateMinimalVersionMutation = {
  createMinimalVersion:  {
    __typename: "MinimalVersion",
    id: string,
    build: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMinimalVersionMutationVariables = {
  input: UpdateMinimalVersionInput,
  condition?: ModelMinimalVersionConditionInput | null,
};

export type UpdateMinimalVersionMutation = {
  updateMinimalVersion:  {
    __typename: "MinimalVersion",
    id: string,
    build: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMinimalVersionMutationVariables = {
  input: DeleteMinimalVersionInput,
  condition?: ModelMinimalVersionConditionInput | null,
};

export type DeleteMinimalVersionMutation = {
  deleteMinimalVersion:  {
    __typename: "MinimalVersion",
    id: string,
    build: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetExamQueryVariables = {
  id: string,
};

export type GetExamQuery = {
  getExam:  {
    __typename: "Exam",
    id: string,
    english: boolean | null,
    javaScript: boolean | null,
    reactNative: boolean | null,
    typeScript: boolean | null,
    amplify: boolean | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExamsQueryVariables = {
  filter?: ModelExamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExamsQuery = {
  listExams:  {
    __typename: "ModelExamConnection",
    items:  Array< {
      __typename: "Exam",
      id: string,
      english: boolean | null,
      javaScript: boolean | null,
      reactNative: boolean | null,
      typeScript: boolean | null,
      amplify: boolean | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
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
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
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
      description: string,
      img: string,
      uri: string,
      json: string | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetJavaScriptQueryVariables = {
  id: string,
};

export type GetJavaScriptQuery = {
  getJavaScript:  {
    __typename: "JavaScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJavaScriptsQueryVariables = {
  filter?: ModelJavaScriptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJavaScriptsQuery = {
  listJavaScripts:  {
    __typename: "ModelJavaScriptConnection",
    items:  Array< {
      __typename: "JavaScript",
      id: string,
      title: string,
      description: string,
      img: string,
      uri: string,
      json: string | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetReactNativeQueryVariables = {
  id: string,
};

export type GetReactNativeQuery = {
  getReactNative:  {
    __typename: "ReactNative",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReactNativesQueryVariables = {
  filter?: ModelReactNativeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReactNativesQuery = {
  listReactNatives:  {
    __typename: "ModelReactNativeConnection",
    items:  Array< {
      __typename: "ReactNative",
      id: string,
      title: string,
      description: string,
      img: string,
      uri: string,
      json: string | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTypeScriptQueryVariables = {
  id: string,
};

export type GetTypeScriptQuery = {
  getTypeScript:  {
    __typename: "TypeScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTypeScriptsQueryVariables = {
  filter?: ModelTypeScriptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTypeScriptsQuery = {
  listTypeScripts:  {
    __typename: "ModelTypeScriptConnection",
    items:  Array< {
      __typename: "TypeScript",
      id: string,
      title: string,
      description: string,
      img: string,
      uri: string,
      json: string | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAmplifyQueryVariables = {
  id: string,
};

export type GetAmplifyQuery = {
  getAmplify:  {
    __typename: "Amplify",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAmplifysQueryVariables = {
  filter?: ModelAmplifyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAmplifysQuery = {
  listAmplifys:  {
    __typename: "ModelAmplifyConnection",
    items:  Array< {
      __typename: "Amplify",
      id: string,
      title: string,
      description: string,
      img: string,
      uri: string,
      json: string | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEnglishProgQueryVariables = {
  id: string,
};

export type GetEnglishProgQuery = {
  getEnglishProg:  {
    __typename: "EnglishProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEnglishProgsQueryVariables = {
  filter?: ModelEnglishProgFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnglishProgsQuery = {
  listEnglishProgs:  {
    __typename: "ModelEnglishProgConnection",
    items:  Array< {
      __typename: "EnglishProg",
      id: string,
      doneId: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetJavaScriptProgQueryVariables = {
  id: string,
};

export type GetJavaScriptProgQuery = {
  getJavaScriptProg:  {
    __typename: "JavaScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJavaScriptProgsQueryVariables = {
  filter?: ModelJavaScriptProgFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJavaScriptProgsQuery = {
  listJavaScriptProgs:  {
    __typename: "ModelJavaScriptProgConnection",
    items:  Array< {
      __typename: "JavaScriptProg",
      id: string,
      doneId: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetReactNativeProgQueryVariables = {
  id: string,
};

export type GetReactNativeProgQuery = {
  getReactNativeProg:  {
    __typename: "ReactNativeProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReactNativeProgsQueryVariables = {
  filter?: ModelReactNativeProgFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReactNativeProgsQuery = {
  listReactNativeProgs:  {
    __typename: "ModelReactNativeProgConnection",
    items:  Array< {
      __typename: "ReactNativeProg",
      id: string,
      doneId: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTypeScriptProgQueryVariables = {
  id: string,
};

export type GetTypeScriptProgQuery = {
  getTypeScriptProg:  {
    __typename: "TypeScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTypeScriptProgsQueryVariables = {
  filter?: ModelTypeScriptProgFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTypeScriptProgsQuery = {
  listTypeScriptProgs:  {
    __typename: "ModelTypeScriptProgConnection",
    items:  Array< {
      __typename: "TypeScriptProg",
      id: string,
      doneId: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAmplifyProgQueryVariables = {
  id: string,
};

export type GetAmplifyProgQuery = {
  getAmplifyProg:  {
    __typename: "AmplifyProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAmplifyProgsQueryVariables = {
  filter?: ModelAmplifyProgFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAmplifyProgsQuery = {
  listAmplifyProgs:  {
    __typename: "ModelAmplifyProgConnection",
    items:  Array< {
      __typename: "AmplifyProg",
      id: string,
      doneId: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMinimalVersionQueryVariables = {
  id: string,
};

export type GetMinimalVersionQuery = {
  getMinimalVersion:  {
    __typename: "MinimalVersion",
    id: string,
    build: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMinimalVersionsQueryVariables = {
  filter?: ModelMinimalVersionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMinimalVersionsQuery = {
  listMinimalVersions:  {
    __typename: "ModelMinimalVersionConnection",
    items:  Array< {
      __typename: "MinimalVersion",
      id: string,
      build: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExamSubscription = {
  onCreateExam:  {
    __typename: "Exam",
    id: string,
    english: boolean | null,
    javaScript: boolean | null,
    reactNative: boolean | null,
    typeScript: boolean | null,
    amplify: boolean | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExamSubscription = {
  onUpdateExam:  {
    __typename: "Exam",
    id: string,
    english: boolean | null,
    javaScript: boolean | null,
    reactNative: boolean | null,
    typeScript: boolean | null,
    amplify: boolean | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExamSubscription = {
  onDeleteExam:  {
    __typename: "Exam",
    id: string,
    english: boolean | null,
    javaScript: boolean | null,
    reactNative: boolean | null,
    typeScript: boolean | null,
    amplify: boolean | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEnglishSubscription = {
  onCreateEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEnglishSubscription = {
  onUpdateEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEnglishSubscription = {
  onDeleteEnglish:  {
    __typename: "English",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJavaScriptSubscription = {
  onCreateJavaScript:  {
    __typename: "JavaScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJavaScriptSubscription = {
  onUpdateJavaScript:  {
    __typename: "JavaScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJavaScriptSubscription = {
  onDeleteJavaScript:  {
    __typename: "JavaScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReactNativeSubscription = {
  onCreateReactNative:  {
    __typename: "ReactNative",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReactNativeSubscription = {
  onUpdateReactNative:  {
    __typename: "ReactNative",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReactNativeSubscription = {
  onDeleteReactNative:  {
    __typename: "ReactNative",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTypeScriptSubscription = {
  onCreateTypeScript:  {
    __typename: "TypeScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTypeScriptSubscription = {
  onUpdateTypeScript:  {
    __typename: "TypeScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTypeScriptSubscription = {
  onDeleteTypeScript:  {
    __typename: "TypeScript",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAmplifySubscription = {
  onCreateAmplify:  {
    __typename: "Amplify",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAmplifySubscription = {
  onUpdateAmplify:  {
    __typename: "Amplify",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAmplifySubscription = {
  onDeleteAmplify:  {
    __typename: "Amplify",
    id: string,
    title: string,
    description: string,
    img: string,
    uri: string,
    json: string | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEnglishProgSubscription = {
  onCreateEnglishProg:  {
    __typename: "EnglishProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEnglishProgSubscription = {
  onUpdateEnglishProg:  {
    __typename: "EnglishProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEnglishProgSubscription = {
  onDeleteEnglishProg:  {
    __typename: "EnglishProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJavaScriptProgSubscription = {
  onCreateJavaScriptProg:  {
    __typename: "JavaScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJavaScriptProgSubscription = {
  onUpdateJavaScriptProg:  {
    __typename: "JavaScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJavaScriptProgSubscription = {
  onDeleteJavaScriptProg:  {
    __typename: "JavaScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReactNativeProgSubscription = {
  onCreateReactNativeProg:  {
    __typename: "ReactNativeProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReactNativeProgSubscription = {
  onUpdateReactNativeProg:  {
    __typename: "ReactNativeProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReactNativeProgSubscription = {
  onDeleteReactNativeProg:  {
    __typename: "ReactNativeProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTypeScriptProgSubscription = {
  onCreateTypeScriptProg:  {
    __typename: "TypeScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTypeScriptProgSubscription = {
  onUpdateTypeScriptProg:  {
    __typename: "TypeScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTypeScriptProgSubscription = {
  onDeleteTypeScriptProg:  {
    __typename: "TypeScriptProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAmplifyProgSubscription = {
  onCreateAmplifyProg:  {
    __typename: "AmplifyProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAmplifyProgSubscription = {
  onUpdateAmplifyProg:  {
    __typename: "AmplifyProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAmplifyProgSubscription = {
  onDeleteAmplifyProg:  {
    __typename: "AmplifyProg",
    id: string,
    doneId: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMinimalVersionSubscription = {
  onCreateMinimalVersion:  {
    __typename: "MinimalVersion",
    id: string,
    build: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMinimalVersionSubscription = {
  onUpdateMinimalVersion:  {
    __typename: "MinimalVersion",
    id: string,
    build: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMinimalVersionSubscription = {
  onDeleteMinimalVersion:  {
    __typename: "MinimalVersion",
    id: string,
    build: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
