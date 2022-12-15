/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIngabo = /* GraphQL */ `
  query GetIngabo($id: ID!) {
    getIngabo(id: $id) {
      id
      fullName
      dateofbirth
      nationalID
      addressCell
      addressSector
      addressDistrict
      cooperative
      telephone
      activity1
      activity2
      activity3
      activity4
      activity5
      activity6
      activity7
      activity8
      no
      igitsina
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listIngabos = /* GraphQL */ `
  query ListIngabos(
    $filter: ModelIngaboFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngabos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        dateofbirth
        nationalID
        addressCell
        addressSector
        addressDistrict
        cooperative
        telephone
        activity1
        activity2
        activity3
        activity4
        activity5
        activity6
        activity7
        activity8
        no
        igitsina
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncIngabos = /* GraphQL */ `
  query SyncIngabos(
    $filter: ModelIngaboFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIngabos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fullName
        dateofbirth
        nationalID
        addressCell
        addressSector
        addressDistrict
        cooperative
        telephone
        activity1
        activity2
        activity3
        activity4
        activity5
        activity6
        activity7
        activity8
        no
        igitsina
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
