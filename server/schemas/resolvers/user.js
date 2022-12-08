const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const { signToken } = require('../../utils/auth');

module.exports = {
    Mutation: {
        async register(
            _,
            {
                registerInput: {
                    first_name,
                    last_name,
                    email,
                    password,
                    confirmPassword,
                    gender,
                    birth_year,
                    birth_month,
                    birth_day,
                },
            }
        ) {
            // TODO: Validate user data
            // TODO: Make sure user doesn't already exist
            // TODO: hash the password and create an auth token
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                createdAt: new Date().toISOString(),
                first_name,
                last_name,
                email,
                password,
                gender,
                birth_year,
                birth_month,
                birth_day,
            });

            const res = await newUser.save();
            const { _id } = res;
            const token = signToken({
                email,
                first_name,
                last_name,
                _id,
            });
            console.log(...res._doc);

            return {
                ...res._doc,
                id: _id,
                token,
            };
        },
    },
};
