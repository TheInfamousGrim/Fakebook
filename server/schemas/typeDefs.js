const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        createdAt: String!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        gender: Gender
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

    type Gender {
        _id: ID!
        userId: String!
        pronouns: String!
        genderIdentity: String!
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
        profilePicture: String
        type: String
        text: String!
        image: String
        background: String
        comments: [Comment]!
        commentCount: Int
        reacts: [React]!
        reactCount: Int
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
        userId: String
        firstName: String
        lastName: String
        profilePic: String
        postId: String
        react: String!
    }

    input AddUserInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        confirmPassword: String!
        pronoun: String
        genderIdentity: String!
        birthYear: Int!
        birthMonth: Int!
        birthDay: Int!
    }

    type Query {
        getPosts: [Post]
        getPostById(postId: ID!): Post
    }

    type Mutation {
        addUser(addUserInput: AddUserInput): Auth!
        login(email: String!, password: String!): Auth!

        createPost(text: String!, type: String, image: String, background: String): Post!
        deletePost(postId: ID!): String!
        reactToPost(postId: ID!, reactId: String, reactionType: String!): Post!

        createComment(postId: ID!, text: String!, images: [String]): Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        reactToComment(postId: ID!, reactID: String, commentId: String, reactionType: String!): Comment!
    }
`;

module.exports = typeDefs;
