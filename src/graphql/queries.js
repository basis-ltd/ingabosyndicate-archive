/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listIngabos = `
query {
  listIngabos {
    items{
      fullName dateofbirth nationalID gender telephone cooperative addressCell addressSector addressDistrict activity1 activity2 activity3 activity4 activity5 activity6 activity7 activity8 no
    }
  }
}
`
