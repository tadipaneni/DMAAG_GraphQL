require('@babel/register'); // Ensure Babel transpiles your code
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const { AppDataSource } = require('./db');

// Initialize the Express application
const app = express();

// Create an Apollo Server instance
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { AppDataSource }, // Pass the database source to the context
});

// Start the server asynchronously
async function startServer() {
    try {
        // Initialize the database
        await AppDataSource.initialize();
        console.log("Database connected successfully");

        // Start the Apollo Server
        await server.start();
        server.applyMiddleware({ app }); // Apply Apollo GraphQL middleware to Express

        // Start the Express server
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
}

// Call the start function
startServer();
