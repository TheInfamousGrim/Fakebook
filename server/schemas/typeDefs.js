const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        createdAt: String!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        gender: String!
        phoneNumber: String!
        birthYear: Int!
        birthMonth: Int!
        birthDay: Int!
        profilePicture: String
        cover: String
        friends: [User]
        following: [User]
        followers: [User]
        requests: [User]
        search: [User]
        userDetails: UserDetails
        savedPosts: [Post]
    }

    type Auth {
        token: ID!
        user: User!
    }

    type UserDetails {
        _id: ID!
        createdAt: String!
        userId: String!
        bio: String
        otherName: String
        job: String
        workplace: String
        highschool: String
        college: String
        currentCity: String
        hometown: String
        relationship: String
        instagram: String
    }

    type Post {
        _id: ID!
        createdAt: String!
        userId: String!
        firstName: String!
        lastName: String!
        profilePic: String!
        type: String
        text: String!
        images: [String]!
        background: String
        reacts: [React]!
        reactCount: Int
        comments: [Comment]!
        commentCount: Int
    }

    type Comment {
        _id: ID!
        createdAt: String!
        userID: String
        firstName: String
        lastName: String
        profilePicture: String
        text: String
        image: String
        reacts: [React]!
        reactCount: Int
    }

    type React {
        _id: ID!
        createdAt: String!
        userId: String!
        firstName: String!
        lastName: String!
        profilePic: String!
        postId: String!
        react: String!
    }

    input RegisterInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        confirmPassword: String!
        gender: String!
        phoneNumber: String!
        birthYear: Int!
        birthMonth: Int!
        birthDay: Int!
    }

    type Query {
        getPosts: [Post]
        getPostById(postId: ID!): Post
    }

    type Mutation {
        register(registerInput: RegisterInput): Auth!
        login(email: String!, password: String!): Auth!

        createPost(text: String!, type: String, images: [String], background: String): Post!
        deletePost(postId: ID!): String!
        reactToPost(postId: ID!, reactionType: String!): Post!

        createComment(postId: ID!, text: String!, images: [String]): Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        reactToComment(postId: ID!, commentId: ID!, reactionType: String!): Comment!
    }
`;

module.exports = typeDefs;
