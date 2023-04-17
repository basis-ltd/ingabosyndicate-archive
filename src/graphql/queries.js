/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIngabo = /* GraphQL */ `
  query GetIngabo($id: ID!) {
    getIngabo(id: $id) {
      id
      fullname
      dateofbirth
      nationalID
      cooperative
      telephone
      cell
      sector
      district
      gender
      aroroye
      arahinga
      imyumbati
      umuceri
      ibigori
      ibinyamisogwe
      imboga_imbuto
      inkoko
      ingurube
      inka
      ibirayi
      ihene
      intama
      signature
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
    $nextToken: String
  ) {
    listIngabos(filter: $filter, limit: 10000, nextToken: $nextToken) {
      items {
        id
        fullname
        dateofbirth
        nationalID
        cooperative
        telephone
        cell
        sector
        district
        gender
        aroroye
        arahinga
        imyumbati
        umuceri
        ibigori
        ibinyamisogwe
        imboga_imbuto
        inkoko
        ingurube
        inka
        ibirayi
        ihene
        intama
        signature
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
        activity9
        activity10
        activity11
        no
        cell
        sector
        district
        gender
        aroroye
        arahinga
        imyumbati
        umuceri
        ibigori
        ibinyamisogwe
        imboga_imbuto
        inkoko
        ingurube
        inka
        ibirayi
        ihene
        intama
        signature
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
