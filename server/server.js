/* ------------------------------ node modules ------------------------------ */
const express = require('express');
// Use Apollo server
const { ApolloServer } = require('apollo-server-express');
// Use path to create paths to certain directories
const path = require('path');
// Import CORS
const cors = require('cors');

/* --------------------------- application modules -------------------------- */
// This is where you import your middleware
const { authMiddleware } = require('./utils/auth');
// Get your types from the schema
const { typeDefs, resolvers } = require('./schemas');
// Import the connection to your db
const db = require('./config/connection');

// Get the port you wish to use
const PORT = process.env.PORT || 3001;
// Use express as an app
const app = express();
// Create a new apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
// Make sure express can parse JSON
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

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

// Configure CORS
app.use(cors());

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
