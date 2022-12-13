import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
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
    mutation Register($registerInput: RegisterInput) {
        register(registerInput: $registerInput) {
            token
            user {
                firstName
                lastName
                profilePicture
            }
        }
    }
`;
