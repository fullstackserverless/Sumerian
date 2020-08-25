/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
        avatar {
          bucket
          region
          key
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
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
      json
      owner
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
        json
        owner
        createdAt
        updatedAt
      }
      nextToken
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
      json
      owner
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
        json
        owner
        createdAt
        updatedAt
      }
      nextToken
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
      json
      owner
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
        json
        owner
        createdAt
        updatedAt
      }
      nextToken
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
      json
      owner
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
        json
        owner
        createdAt
        updatedAt
      }
      nextToken
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
      json
      owner
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
        json
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEnglishProg = /* GraphQL */ `
  query GetEnglishProg($id: ID!) {
    getEnglishProg(id: $id) {
      id
      doneId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listEnglishProgs = /* GraphQL */ `
  query ListEnglishProgs(
    $filter: ModelEnglishProgFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnglishProgs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        doneId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJavaScriptProg = /* GraphQL */ `
  query GetJavaScriptProg($id: ID!) {
    getJavaScriptProg(id: $id) {
      id
      doneId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listJavaScriptProgs = /* GraphQL */ `
  query ListJavaScriptProgs(
    $filter: ModelJavaScriptProgFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJavaScriptProgs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        doneId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReactNativeProg = /* GraphQL */ `
  query GetReactNativeProg($id: ID!) {
    getReactNativeProg(id: $id) {
      id
      doneId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listReactNativeProgs = /* GraphQL */ `
  query ListReactNativeProgs(
    $filter: ModelReactNativeProgFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReactNativeProgs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doneId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTypeScriptProg = /* GraphQL */ `
  query GetTypeScriptProg($id: ID!) {
    getTypeScriptProg(id: $id) {
      id
      doneId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listTypeScriptProgs = /* GraphQL */ `
  query ListTypeScriptProgs(
    $filter: ModelTypeScriptProgFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypeScriptProgs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        doneId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAmplifyProg = /* GraphQL */ `
  query GetAmplifyProg($id: ID!) {
    getAmplifyProg(id: $id) {
      id
      doneId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listAmplifyProgs = /* GraphQL */ `
  query ListAmplifyProgs(
    $filter: ModelAmplifyProgFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmplifyProgs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        doneId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
