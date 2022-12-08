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
        phoneNumber: String!
        picture: String
        cover: String
        birthYear: Int!
        birthMonth: Int!
        birthDay: Int!
        friends: [User]
        following: [User]
        followers: [User]
        requests: [User]
        search: [User]
        userDetails: [UserDetails]
        savedPosts: [Post]
    }

    type Auth {
        token: ID!
        user: User
    }

    type UserDetails {
        _id: ID!
        createdAt: String!
        bio: String
        otherName: String
        job: String
        workplace: String
        highSchool: String
        college: String
        currentCity: String
        hometown: String
        relationShip: String
        instagram: String
    }

    type Post {
        _id: ID!
        createdAt: String!
        type: String
        text: String
        images: [String]
        user: User
        background: String
        reacts: [React]
        comments: [Comment]
    }

    type Comment {
        _id: ID!
        createdAt: String!
        text: String
        image: String
        commentBy: User
    }
`;
