import { gql } from '@apollo/client';

export const FETCH_POSTS_QUERY = gql`
    query GetPosts {
        getPosts {
            _id
            createdAt
            userId
            firstName
            lastName
            profilePicture
            text
            image
            commentCount
            reactCount
            comments {
                _id
                userID
                createdAt
                firstName
                lastName
                profilePicture
                text
                reactCount
            }
        }
    }
`;
