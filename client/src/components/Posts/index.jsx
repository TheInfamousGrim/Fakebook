// Dependencies
import React, { useState, CSSProperties } from 'react';
import { useQuery } from '@apollo/client';
import { GridLoader } from 'react-spinners/GridLoader';
import { motion } from 'framer-motion';

// Import components
import PostTest from '../PostTest/index.jsx';

function Posts({ posts, loading }) {
    return (
        <div>
            {loading ? (
                <GridLoader color="#FF00BB" loading={loading} size={150} aria-label="Loading Spinner" />
            ) : (
                <div>
                    {posts &&
                        posts.map((post) => (
                            <PostTest
                                key={post.id}
                                createdAt={post.createdAt}
                                userId={post.userId}
                                firstName={post.firstName}
                                lastName={post.lastName}
                                profilePicture={post.profilePicture}
                                text={post.text}
                                reactCount={post.reactCount}
                                style={{ marginBottom: 20 }}
                            />
                        ))}
                </div>
            )}
        </div>
    );
}

export default Posts;
