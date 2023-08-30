import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    tracksforHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    moduleCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
