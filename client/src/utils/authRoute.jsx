import React, { useContext } from 'react';
import { Route, redirect } from 'react-router-dom';

import { AuthContext } from '../context/auth';

export default function AuthRoute({ component: Component, ...rest }) {
    const { user } = useContext(AuthContext);

    return <Route {...rest} render={(props) => (user ? redirect('/login') : <Component {...props} />)} />;
}
