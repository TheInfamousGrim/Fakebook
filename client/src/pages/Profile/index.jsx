import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';

// Import auth
import { AuthContext } from '../../context/auth';
import Auth from '../../utils/Auth';

// Components
import Nav from '../../components/Nav/index';
import Cover from '../../components/Cover/index';
import Intro from '../../components/intro/index';
import PhotoGallery from '../../components/PhotoGallery';
import FriendList from '../../components/Friends';
import CreatePost from '../../components/createPost';
import UserPost from '../../components/UserPost';

function Profile() {
    // Authorization
    const { user } = useContext(AuthContext);
    if (!Auth.loggedIn()) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="antialiased">
            <Nav />
            <Cover />
            <div className="bg-dark px-52 grid grid-cols-12 mt-4 z-10 gap-4 antialiased">
                <div className="col-span-5 col-start-1 row-start-1 mt-8 space-y-4">
                    <Intro />
                    <PhotoGallery />
                    <FriendList />
                </div>
                <div className=" flex-row col-span-7 col-start-6 row-start-1 mt-8 space-y-4">
                    <CreatePost />
                    <UserPost />
                </div>
            </div>
        </div>
    );
}

export default Profile;
