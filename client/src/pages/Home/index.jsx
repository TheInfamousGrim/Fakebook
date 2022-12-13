import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';

// Components
import Nav from '../../components/Nav';
import Widgets from '../../components/Widgets';
import Sidebar from '../../components/Sidebar';
import PostTest from '../../components/PostTest';

// Import queries
import { FETCH_POSTS_QUERY } from '../../utils/queries.js';

// Import auth
import { AuthContext } from '../../context/auth';
import Auth from '../../utils/Auth';

function Home() {
    // Authorization
    const { user } = useContext(AuthContext);
    if (!Auth.loggedIn()) {
        return window.location.assign('/login');
    }

    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    const posts = data?.getPosts || [];

    return (
        <div>
            <Nav />
            <main className="flex">
                <Sidebar />
                <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
                    <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                        <div>
                            {loading ? (
                                <h1>Loading...</h1>
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
                                                image={post.image}
                                                reactCount={post.reactCount}
                                                style={{ marginBottom: 20 }}
                                            />
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Widgets />
            </main>
        </div>
    );
}

export default Home;
