// Import required libraries and modules
require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const jwt = require('jsonwebtoken');

// Import GraphQL type definitions, resolvers, and database configuration
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Define the port number for the server
const PORT = process.env.PORT || 3001;

// Create an instance of the Express application
const app = express();

// Create an instance of an Apollo Server with the provided GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => { 
    let token = req.headers.authorization || '';
    token = token.split('Bearer ')[1]; 

    if (!token) return {};

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      return { user };
    } catch (err) {
      console.error('Invalid token');
      return {};
    }
  },
  playground: process.env.NODE_ENV !== 'production'

});
const startApolloServer = async () => {
  // Ensure Apollo server has started
  await server.start();

  // Set up middleware to handle URL-encoded and JSON data
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // apollo server with express
  server.applyMiddleware({ app, path: '/graphql' });

    // Serve static files when in production mode
  if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));


    // Route all unmatched routes to the main HTML file in production
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the async function to start the Apollo Server
startApolloServer();
