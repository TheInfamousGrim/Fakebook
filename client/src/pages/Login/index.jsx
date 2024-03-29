// Import dependencies
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useMutation, ApolloError } from '@apollo/client';

// Authorization
import Auth from '../../utils/Auth';

// Import mutations
import { LOGIN_USER } from '../../utils/mutations.js';

// Import components
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';

function Login() {
    // State
    const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    // Errors
    const [errors, setErrors] = useState({});

    // Mutations
    const [login, { error, data }] = useMutation(LOGIN_USER, { errorPolicy: 'all' });

    const onLoginFormChange = (event) => {
        event.stopPropagation();
        const { name, value } = event.target;

        setLoginFormState({
            ...loginFormState,
            [name]: value,
        });
    };

    // Submit login form
    const handleLoginFormSubmit = async (event) => {
        try {
            const { data } = await login({
                variables: { ...loginFormState },
            });

            Auth.login(data.login.token);
            // clear form values
            setLoginFormState({
                email: '',
                password: '',
            });
            return <Navigate to="/" />;
        } catch (e) {
            // clear form values
            const formErrors = await error.graphQLErrors[0].extensions.errors;
            setErrors(formErrors);
        }
    };

    return (
        <div className="login bg-whitish text-blackText bg-login-pattern bg-no-repeat h-screen flex justify-center items-center">
            <div className="login_wrapper h-4/5">
                <div className="login_wrap flex flex-col gap-10">
                    <div className="login_1 w-96 my-0 mx-auto">
                        <h1 className="text-3xl">Fakebook</h1>
                        <span className="text-xl">
                            Fakebook helps you connect and share with the people in your life.
                        </span>
                    </div>

                    <SignInForm
                        loginFormState={loginFormState}
                        onLoginFormChange={onLoginFormChange}
                        handleLoginFormSubmit={handleLoginFormSubmit}
                        loginErrors={errors}
                        setRegisterModalOpen={setRegisterModalOpen}
                    />
                </div>
            </div>
            <SignUpForm registerModalOpen={registerModalOpen} setRegisterModalOpen={setRegisterModalOpen} />
        </div>
    );
}

export default Login;
