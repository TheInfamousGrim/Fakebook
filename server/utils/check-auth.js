const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');
require('dotenv').config;

module.exports = (context) => {
    // context = { ...headers }
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        // Bearer ...
        const token = authHeader.split('Bearer ')[1];
        if (token) {
            try {
                const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
                return user;
            } catch (err) {
                throw new AuthenticationError('Invavlid/Expired token');
            }
        }
        throw new Error(`Authentication token must be 'Bearer [token]'`);
    }
    throw new Error('Authentication header must be provided');
};
