import React, { useContext } from 'react';

// Import auth
import { AuthContext } from '../../context/auth';
import Auth from '../../utils/Auth';

// Components
import Nav from '../../components/Nav/index';
import Cover from '../../components/Cover/index';
import Intro from '../../components/intro/index';
import Photos from '../../components/Photos';
import FriendList from '../../components/Friends';
import CreatePost from '../../components/createPost';
import Post from '../../components/Post';

function Profile() {
    // Authorization
    const { user } = useContext(AuthContext);
    if (!Auth.loggedIn()) {
        return window.location.assign('/login');
    }

    return (
        <div className="antialiased">
            <Nav />
            <Cover />
            <div className="bg-dark px-52 grid grid-cols-12 mt-4 z-10 gap-4 antialiased">
                <div className="col-span-5 col-start-1 row-start-1 mt-8 space-y-4">
                    <Intro />
                    <Photos />
                    <FriendList />
                </div>
                <div className=" flex-row col-span-7 col-start-6 row-start-1 mt-8 space-y-4">
                    <CreatePost />
                    <Post />
                </div>
            </div>
        </div>
    );
}

export default Profile;
