/* --------------------------- dependency imports --------------------------- */
const express = require('express');
// Import environment variables
require('dotenv').config();
// Use Apollo server
const { ApolloServer } = require('apollo-server-express');
// Use graphql subscriptions
const { PubSub } = require('graphql-subscriptions');
// Import CORS
const cors = require('cors');
// Import path
const path = require('path');

/* ----------------------------- module imports ----------------------------- */
// Import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
// Create a new public subscription
const pubsub = new PubSub();

/* -------------------------------- database -------------------------------- */
// Import the connection to your db
const db = require('./config/connection');

/* ------------------------------ server setup ------------------------------ */
// Get the port you wish to use
const PORT = process.env.PORT || 4000;
// Use express as an app
const app = express();
// Create a new apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub }),
});

app.use(express.urlencoded({ extended: false }));
// Make sure express can parse JSON
app.use(express.json());

/* ------------------------------ initial route ----------------------------- */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist'));
});

/* ------------------------- render js and css files ------------------------ */

app.use(express.static(`${__dirname}/assets/`));

/* --------------------------- application modules -------------------------- */

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
