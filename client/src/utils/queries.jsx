import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
  query Services {
    services {
      _id
      title
      description
      price {
        min60
        min90
      }
      image
    }
  }
`;
export const GET_SERVICE_BY_ID = gql`
  query Service($id: ID!) {
    service(id: $id) {
      _id
      title
      description
      price {
        min60
        min90
      }
      image
    }
  }
`;
