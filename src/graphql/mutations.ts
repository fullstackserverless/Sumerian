/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      avatar {
        bucket
        region
        key
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      avatar {
        bucket
        region
        key
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      avatar {
        bucket
        region
        key
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createEnglishProg = /* GraphQL */ `
  mutation CreateEnglishProg(
    $input: CreateEnglishProgInput!
    $condition: ModelEnglishProgConditionInput
  ) {
    createEnglishProg(input: $input, condition: $condition) {
      id
      doneId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateEnglishProg = /* GraphQL */ `
  mutation UpdateEnglishProg(
    $input: UpdateEnglishProgInput!
    $condition: ModelEnglishProgConditionInput
  ) {
    updateEnglishProg(input: $input, condition: $condition) {
      id
      doneId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteEnglishProg = /* GraphQL */ `
  mutation DeleteEnglishProg(
    $input: DeleteEnglishProgInput!
    $condition: ModelEnglishProgConditionInput
  ) {
    deleteEnglishProg(input: $input, condition: $condition) {
      id
      doneId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createEnglish = /* GraphQL */ `
  mutation CreateEnglish(
    $input: CreateEnglishInput!
    $condition: ModelEnglishConditionInput
  ) {
    createEnglish(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateEnglish = /* GraphQL */ `
  mutation UpdateEnglish(
    $input: UpdateEnglishInput!
    $condition: ModelEnglishConditionInput
  ) {
    updateEnglish(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteEnglish = /* GraphQL */ `
  mutation DeleteEnglish(
    $input: DeleteEnglishInput!
    $condition: ModelEnglishConditionInput
  ) {
    deleteEnglish(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createJavaScript = /* GraphQL */ `
  mutation CreateJavaScript(
    $input: CreateJavaScriptInput!
    $condition: ModelJavaScriptConditionInput
  ) {
    createJavaScript(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateJavaScript = /* GraphQL */ `
  mutation UpdateJavaScript(
    $input: UpdateJavaScriptInput!
    $condition: ModelJavaScriptConditionInput
  ) {
    updateJavaScript(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteJavaScript = /* GraphQL */ `
  mutation DeleteJavaScript(
    $input: DeleteJavaScriptInput!
    $condition: ModelJavaScriptConditionInput
  ) {
    deleteJavaScript(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createReactNative = /* GraphQL */ `
  mutation CreateReactNative(
    $input: CreateReactNativeInput!
    $condition: ModelReactNativeConditionInput
  ) {
    createReactNative(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateReactNative = /* GraphQL */ `
  mutation UpdateReactNative(
    $input: UpdateReactNativeInput!
    $condition: ModelReactNativeConditionInput
  ) {
    updateReactNative(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteReactNative = /* GraphQL */ `
  mutation DeleteReactNative(
    $input: DeleteReactNativeInput!
    $condition: ModelReactNativeConditionInput
  ) {
    deleteReactNative(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createTypeScript = /* GraphQL */ `
  mutation CreateTypeScript(
    $input: CreateTypeScriptInput!
    $condition: ModelTypeScriptConditionInput
  ) {
    createTypeScript(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateTypeScript = /* GraphQL */ `
  mutation UpdateTypeScript(
    $input: UpdateTypeScriptInput!
    $condition: ModelTypeScriptConditionInput
  ) {
    updateTypeScript(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteTypeScript = /* GraphQL */ `
  mutation DeleteTypeScript(
    $input: DeleteTypeScriptInput!
    $condition: ModelTypeScriptConditionInput
  ) {
    deleteTypeScript(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createAmplify = /* GraphQL */ `
  mutation CreateAmplify(
    $input: CreateAmplifyInput!
    $condition: ModelAmplifyConditionInput
  ) {
    createAmplify(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateAmplify = /* GraphQL */ `
  mutation UpdateAmplify(
    $input: UpdateAmplifyInput!
    $condition: ModelAmplifyConditionInput
  ) {
    updateAmplify(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteAmplify = /* GraphQL */ `
  mutation DeleteAmplify(
    $input: DeleteAmplifyInput!
    $condition: ModelAmplifyConditionInput
  ) {
    deleteAmplify(input: $input, condition: $condition) {
      id
      title
      description
      img
      uri
      json
      owner
      createdAt
      updatedAt
    }
  }
`;
