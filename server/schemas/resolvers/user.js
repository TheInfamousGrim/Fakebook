const bcrypt = require('bcrypt');
const { UserInputError } = require('apollo-server-express');

const { validateRegisterInput, validateUserLogin } = require('../../utils/validate');
const User = require('../../models/User');
const { signToken } = require('../../utils/auth');

module.exports = {
    Mutation: {
        async login(_, { email, password }) {
            const { errors, valid } = validateUserLogin(email, password);
            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }

            const user = await User.findOne({ email });

            if (!user) {
                errors.general = 'User not found';
                throw new UserInputError('User not found', { errors });
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                errors.general = 'Incorrect password, please try again';
                throw new UserInputError('Incorrect password please try again', { errors });
            }

            const token = signToken(user);

            return {
                ...user._doc,
                id: user._id,
                token,
            };
        },

        async register(
            _,
            {
                registerInput: {
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                    gender,
                    birthYear,
                    birthMonth,
                    birthDay,
                },
            }
        ) {
            // Validate user data
            const { valid, errors } = validateRegisterInput(
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                gender,
                birthYear,
                birthMonth,
                birthDay
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
            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = new User({
                createdAt: new Date().toISOString(),
                firstName,
                lastName,
                email,
                password: hashedPassword,
                gender,
                birthYear,
                birthMonth,
                birthDay,
            });

            const res = await newUser.save();
            const { _id } = res;
            const token = signToken({
                email,
                firstName,
                lastName,
                _id,
            });

            return {
                user: res,
                id: _id,
                token,
            };
        },
    },
};
