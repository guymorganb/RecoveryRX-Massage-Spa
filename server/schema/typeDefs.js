import { gql } from "apollo-server-express";


const typeDefs = gql` #graphql
  type Service{
    _id: ID!
    title: String!
    description: String!
    price: [Price!]!
    image: String
  }

  type Price {
    min60: String!
    min90: String!
  }
  
  type Query {
    services: [Service!]!
    service(id: ID!): Service
  }

  type Mutation {
    addService(title: String!, description: String!, price: [PriceInput!]!, image: String): Service!
    updateService(id: ID!, title: String, description: String, price:[PriceInput!]!, image: String): Service!
    deleteService(id: ID!): Service!
  }
  
  input PriceInput {
        min60: String!
        min90: String!
    }
`;

export default typeDefs;