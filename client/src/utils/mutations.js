import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
                profilePicture
            }
        }
    }
`;

export const REGISTER_USER = gql`
    mutation AddUser($addUserInput: AddUserInput) {
        addUser(addUserInput: $addUserInput) {
            token
            user {
                _id
                firstName
                lastName
            }
        }
    }
`;
