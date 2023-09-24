import { gql } from '@apollo/client';

export const ADD_SERVICE = gql`
#add service creates an id
  mutation AddService($title: String!, $description: String!, $min60: String!, $min90: String!, $image: String) {
    addService(title: $title, description: $description, price: [{min60: $min60, min90: $min90}], image: $image) {
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

export const UPDATE_SERVICE = gql`
# description
  mutation UpdateService($id: ID!, $title: String, $description: String, $min60: String!, $min90: String!, $image: String) {
    # call to the updateService resolver with the parameters needed
    updateService(id: $id, title: $title, description: $description, price: [{min60: $min60, min90: $min90}], image: $image) {
      # the structure of the data returned
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

export const DELETE_SERVICE = gql`
  mutation DeleteService($id: ID!) {
    deleteService(id: $id) {
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
