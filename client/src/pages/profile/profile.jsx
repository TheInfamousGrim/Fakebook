import React from 'react';
import './index.css';
import Nav from '../../components/Nav/index';
import Header from '../../components/header/index';

function Profile() {
    return (
        <div>
            <div className="z-0">
                <Nav />
            </div>
            <div className="z-10">
                <Header />
            </div>
        </div>
    );
}

export default Profile;
