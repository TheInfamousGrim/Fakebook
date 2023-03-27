// External modules
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Profile from './pages/Profile';
import Login from './pages/Login';
import Home from './pages/Home';
import Donation from './pages/Donation';

// Authentication
import { AuthProvider } from './context/auth';
import AuthRoute from './utils/authRoute';

// Create an httpLink to graphql
const httpLink = createHttpLink({
    uri: 'https://agile-taiga-04390.herokuapp.com/graphql',
});

// Create an authLink
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

// Create an apollo client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/donation" element={<Donation />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </ApolloProvider>
    );
}

export default App;
