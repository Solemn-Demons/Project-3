const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema
} = require('graphql');

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      role: { type: GraphQLString },
      description: { type: GraphQLString }
  }
});


const PlotType = new GraphQLObjectType({
  name: 'Plot',
  fields: {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      mainCharacter: {
          type: CharacterType,
          resolve(parent, args) {
          }
      },
      timeline: { type: GraphQLString },  
      setting: { type: GraphQLString }    
  }
});

module.exports = typeDefs;
