/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSeafarer = /* GraphQL */ `
  query GetSeafarer($id: ID!) {
    getSeafarer(id: $id) {
      id
      name
      surname
      fiscal_code
      date_of_birth
      city_of_residence
      address
      zip_code
      profile_image
      nationality
      gender
      date_of_registration
      preccint
      username
      payment_method
      maritime_compartment
      birth_place
      passport_number
      registration_number
      telephone_number
      id_role
      subscription_type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSeafarers = /* GraphQL */ `
  query ListSeafarers(
    $filter: ModelSeafarerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeafarers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        fiscal_code
        date_of_birth
        city_of_residence
        address
        zip_code
        profile_image
        nationality
        gender
        date_of_registration
        preccint
        username
        payment_method
        maritime_compartment
        birth_place
        passport_number
        registration_number
        telephone_number
        id_role
        subscription_type
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
export const syncSeafarers = /* GraphQL */ `
  query SyncSeafarers(
    $filter: ModelSeafarerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSeafarers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        surname
        fiscal_code
        date_of_birth
        city_of_residence
        address
        zip_code
        profile_image
        nationality
        gender
        date_of_registration
        preccint
        username
        payment_method
        maritime_compartment
        birth_place
        passport_number
        registration_number
        telephone_number
        id_role
        subscription_type
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
