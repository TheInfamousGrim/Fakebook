const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    signToken({ email, _id }) {
        const payload = { email, _id };
        return jwt.sign({ data: payload }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN });
    },
};
