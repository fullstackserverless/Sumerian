/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncEnglishes = /* GraphQL */ `
  query SyncEnglishes(
    $filter: ModelEnglishFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEnglishes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEnglish = /* GraphQL */ `
  query GetEnglish($id: ID!) {
    getEnglish(id: $id) {
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
export const listEnglishs = /* GraphQL */ `
  query ListEnglishs(
    $filter: ModelEnglishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnglishs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
