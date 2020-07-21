/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        email
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
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      firstName
      lastName
      email
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
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
export const syncJavaScripts = /* GraphQL */ `
  query SyncJavaScripts(
    $filter: ModelJavaScriptFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncJavaScripts(
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
export const getJavaScript = /* GraphQL */ `
  query GetJavaScript($id: ID!) {
    getJavaScript(id: $id) {
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
export const listJavaScripts = /* GraphQL */ `
  query ListJavaScripts(
    $filter: ModelJavaScriptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJavaScripts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncReactNatives = /* GraphQL */ `
  query SyncReactNatives(
    $filter: ModelReactNativeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReactNatives(
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
export const getReactNative = /* GraphQL */ `
  query GetReactNative($id: ID!) {
    getReactNative(id: $id) {
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
export const listReactNatives = /* GraphQL */ `
  query ListReactNatives(
    $filter: ModelReactNativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReactNatives(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncTypeScripts = /* GraphQL */ `
  query SyncTypeScripts(
    $filter: ModelTypeScriptFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTypeScripts(
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
export const getTypeScript = /* GraphQL */ `
  query GetTypeScript($id: ID!) {
    getTypeScript(id: $id) {
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
export const listTypeScripts = /* GraphQL */ `
  query ListTypeScripts(
    $filter: ModelTypeScriptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypeScripts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncAmplifies = /* GraphQL */ `
  query SyncAmplifies(
    $filter: ModelAmplifyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAmplifies(
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
export const getAmplify = /* GraphQL */ `
  query GetAmplify($id: ID!) {
    getAmplify(id: $id) {
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
export const listAmplifys = /* GraphQL */ `
  query ListAmplifys(
    $filter: ModelAmplifyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmplifys(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
