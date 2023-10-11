const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { GraphQLSchema} = require('graphql');
const app = express();
const PORT = process.env.PORT || 4000;


const RootQuery = require('./graphql/types').RootQuery;
Mutation = require('./graphql/mutations').Mutation;

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    graphiql:true
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});