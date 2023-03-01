const bcrypt = require('bcrypt');
const { UserInputError } = require('apollo-server-express');
const dayjs = require('dayjs');

const { validateRegisterInput, validateUserLogin } = require('../../utils/validate');
const User = require('../../models/User');
const { signToken } = require('../../utils/auth');

module.exports = {
    Mutation: {
        async login(_, { email, password }) {
            // Validate if the user has done the correct inputs
            const { errors, valid } = validateUserLogin(email, password);
            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }
            // Find the user by email
            const user = await User.findOne({ email });

            // If there is no user found throw an error
            if (!user) {
                errors.general = 'User not found';
                throw new UserInputError('User not found', { errors });
            }

            // Decrypt the user password and compare them
            const match = await bcrypt.compare(password, user.password);
            // If the password is incorrect throw an error
            if (!match) {
                errors.general = 'Incorrect password, please try again';
                throw new UserInputError('Incorrect password please try again', { errors });
            }

            // Get a JWT token for the user
            const token = signToken(user);

            // Return all this user info
            return {
                user,
                id: user._id,
                token,
            };
        },

        // User registration
        async register(
            _,
            {
                registerInput: {
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                    pronoun,
                    genderIdentity,
                    birthYear,
                    birthMonth,
                    birthDay,
                },
            }
        ) {
            // Validate user data
            const { errors, valid } = validateRegisterInput(
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                pronoun,
                genderIdentity,
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

            // save birthday as ISO 8601 string
            const birthday = dayjs(`${birthYear}-${birthMonth}-${birthDay}`).toISOString();

            const newUser = new User({
                createdAt: new Date().toISOString(),
                firstName,
                lastName,
                email,
                password: hashedPassword,
                gender: {
                    pronoun,
                    genderIdentity,
                },
                birthday,
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
