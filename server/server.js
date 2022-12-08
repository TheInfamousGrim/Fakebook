/* ------------------------------ node modules ------------------------------ */
const express = require('express');
// Import environment variables
require('dotenv').config();
// Use Apollo server
const { ApolloServer, gql } = require('apollo-server-express');
// Use path to create paths to certain directories
const path = require('path');
// Import CORS
const cors = require('cors');

console.log(process.env.NODE);

/* --------------------------- database and schema -------------------------- */
// Import typeDefs and resolvers
// const { typeDefs, resolvers } = require('./schemas');
// Import the connection to your db
const db = require('./config/connection');

const typeDefs = gql`
    type Query {
        sayHi: String!
    }
`;

const resolvers = {
  Query: {
    sayHi: () => 'Hello big boi',
  },
};

/* ------------------------------ server setup ------------------------------ */
// Get the port you wish to use
const PORT = process.env.PORT || 5000;
// Use express as an app
const app = express();
// Create a new apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.urlencoded({ extended: false }));
// Make sure express can parse JSON
app.use(express.json());

/* --------------------------- application modules -------------------------- */
// This is where you import your middleware
// const { authMiddleware } = require('./utils/auth');

// Configure CORS
app.use(cors());

// Call the async function to start the server
// startApolloServer(typeDefs, resolvers);

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
    });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
