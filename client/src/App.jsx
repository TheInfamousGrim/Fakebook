// External modules
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, gql } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Profile from './pages/Profile';
import Login from './pages/Login';
import Home from './pages/Home';
import Donation from './pages/Donation';

// Create an httpLink to graphql
const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

// Create an authLink

// Create an apollo client
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/donation" element={<Donation />} />
                </Routes>
            </Router>
        </ApolloProvider>
    );
}

export default App;
