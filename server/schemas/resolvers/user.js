const bcrypt = require('bcrypt');
const { UserInputError } = require('apollo-server-express');

const { validateRegisterInput } = require('../../utils/validate');
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
            // Validate user data
            const { valid, errors } = validateRegisterInput(
                first_name,
                last_name,
                email,
                password,
                confirmPassword,
                gender,
                birth_year,
                birth_month,
                birth_day
            );
            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }

            // Make sure user doesn't already exist
            const user = await User.findOne({ email });
            if (user) {
                throw new UserInputError('Email address is taken', {
                    errors: {
                        email: 'This email address is taken',
                    },
                });
            }

            // hash the password and create an auth token
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

            return {
                ...res._doc,
                id: _id,
                token,
            };
        },
    },
};
