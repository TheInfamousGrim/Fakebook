const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    signToken({ email, first_name, last_name, _id }) {
        const payload = { email, first_name, last_name, _id };
        return jwt.sign({ data: payload }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN });
    },
};
