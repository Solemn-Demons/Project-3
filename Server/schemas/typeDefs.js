const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Character {
    id: ID!
    name: String!
    age: Int
    gender: String
    physicalDescription: String
    occupation: String
  }

  type Plot {
    id: ID!
    title: String!
    description: String
    mainCharacter: Character
    timeline: String
    setting: String
  }

  # Query Type
  type Query {
    getCharacterById(_id: ID!): Character
    getPlotById(_id: ID!): Plot
    getUserById(_id: ID!): User
    getAllCharacters: [Character]
    getAllPlots: [Plot]
    getAllUsers: [User]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
    addCharacter(
      name: String!
      age: Int
      gender: String
      physicalDescription: String
      occupation: String
    ): Character
    addPlot(
      title: String!
      description: String
      mainCharacterId: ID
      timeline: String
      setting: String
    ): Plot
    addStoryboard(
      storyboardText: String!
      storyboardAuthor: String!
    ): Storyboard
    deleteStoryboard(storyboardId: ID!): Storyboard
    updateStoryboard(
      storyboardId: ID!
      storyboardText: String
      storyboardAuthor: String
    ): Storyboard
    addComment(storyboardId: ID!, commentText: String!): Storyboard
  }
`;

module.exports = typeDefs;
