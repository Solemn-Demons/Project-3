const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { User, Character, Plot } = require('./models'); // Adjust the path as needed
const RootQuery = require('./graphql/types').RootQuery;
const Mutation = require('./graphql/mutations').Mutation;

const app = express();
const PORT = process.env.PORT || 4000;

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
