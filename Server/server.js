// Import required libraries and modules
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

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
});

// Function to start the Apollo Server
const startApolloServer = async () => {
  await server.start();

  // Set up middleware to handle URL-encoded and JSON data
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve static files when in production mode
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    // Route all unmatched routes to the main HTML file in production
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  app.use('/graphql', expressMiddleware(server));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the Apollo Server
startApolloServer();
