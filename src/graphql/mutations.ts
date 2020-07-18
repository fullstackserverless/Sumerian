/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      owner
      _version
      _deleted
      _lastChangedAt
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
      owner
      _version
      _deleted
      _lastChangedAt
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
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
