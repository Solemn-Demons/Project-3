const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    getCharacterById(_id: ID!): Character
    getPlotById(_id: ID!): Plot
    getUserById(_id: ID!): User
    getAllCharacters: [Character]
    getAllPlots: [Plot]
    getAllUsers: [User]
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    createCharacter(
      name: String!
      age: Int
      gender: String
      physicalDescription: String
      occupation: String
    ): Character
    updateCharacter(
      _id: ID!
      name: String
      age: Int
      gender: String
      physicalDescription: String
      occupation: String
    ): Character
    deleteCharacter(_id: ID!): Character
    createPlot(
      title: String!
      description: String
      mainCharacter: ID
      timeline: String
      setting: String
    ): Plot
    updatePlot(
      _id: ID!
      title: String
      description: String
      mainCharacter: ID
      timeline: String
      setting: String
    ): Plot
    deletePlot(_id: ID!): Plot
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
    updateUser(
      _id: ID!
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    deleteUser(_id: ID!): User
  }
`;

module.exports = typeDefs;
