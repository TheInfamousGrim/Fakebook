const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        createdAt: String!
        first_name: String!
        last_name: String!
        email: String!
        password: String!
        gender: String!
        phone_number: String!
        birth_year: Int!
        birth_month: Int!
        birth_day: Int!
        picture: String
        cover: String
        friends: [User]
        following: [User]
        followers: [User]
        requests: [User]
        search: [User]
        user_details: UserDetails
        savedPosts: [Post]
    }

    type Auth {
        token: ID!
        user: User
    }

    type UserDetails {
        _id: ID!
        created_at: String!
        bio: String
        otherName: String
        job: String
        workplace: String
        highschool: String
        college: String
        current_city: String
        hometown: String
        relationShip: String
        instagram: String
        user: User!
    }

    type Post {
        _id: ID!
        created_at: String!
        user: User!
        type: String
        text: String
        images: [String]
        background: String
        reacts: [React]
        comments: [Comment]
    }

    type Comment {
        _id: ID!
        created_at: String!
        comment_by: User!
        text: String
        image: String
    }

    type React {
        _id: ID!
        created_at: String!
        react: String!
        post: Post!
        user: User!
    }

    input RegisterInput {
        first_name: String!
        last_name: String!
        email: String!
        password: String!
        gender: String!
        phone_number: String!
        birth_year: Int!
        birth_month: Int!
        birth_day: Int!
    }

    type Query {
        getPosts: [Post]
    }

    type Mutation {
        register(registerInput: RegisterInput): Auth!
    }
`;

module.exports = typeDefs;
