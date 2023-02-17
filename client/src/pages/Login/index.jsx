// Import dependencies
import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// Custom hooks
import { useForm } from '../../utils/hooks';

// Authorization
import Auth from '../../utils/Auth';

// Import mutations
import { LOGIN_USER, REGISTER_USER } from '../../utils/mutations.js';

// Import components
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';

function Login() {
    // State
    const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    // Mutations
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // Errors
    const [errors, setErrors] = useState({});

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
        event.preventDefault();
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
            setLoginFormState({
                email: '',
                password: '',
            });
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

                    {/* <div className="login_2 text-center flex flex-col justify-apart gap-10">
                        <div className="login_2_wrap bg-white radius rounded-3xl p-5 my-4 flex flex-col items-center gap-7 w-96 h-fit my-0 mx-auto shadow-xl shadow-black">
                            <form className="w-full" onSubmit={handleLoginFormSubmit}>
                                <div widths="equal w-full flex flex-col gap-5">
                                    <input
                                        fluid
                                        placeholder="Email Address"
                                        name="email"
                                        className="color-placeholderColor w-full p-4 border-b-2 border-darkWhite"
                                        value={loginFormState.email}
                                        error={!!errors.email}
                                        onChange={onLoginFormChange}
                                    />
                                    <input
                                        fluid
                                        placeholder="Password"
                                        name="password"
                                        className="color-placeholderColor w-full p-4 border-b-2 border-darkWhite"
                                        value={loginFormState.password}
                                        error={!!errors.password}
                                        onChange={onLoginFormChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="py-2 w-full rounded-2xl flex justify-center items-center bg-gradient-to-r from-darkerPink to-pink shadow-2xl text-white font-bold mt-5 cursor-pointer"
                                >
                                    Login
                                </button>
                            </form>
                            <div className="border border-grey rounded w-full" />
                            <Button className="py-3 w-full rounded-2xl flex justify-center items-center bg-green shadow-2xl text-white font-bold">
                                Create Account
                            </Button>
                        </div>
                        <p>Fake interface for a real interaction</p>
                    </div> */}
                </div>
            </div>
            <SignUpForm registerModalOpen={registerModalOpen} setRegisterModalOpen={setRegisterModalOpen} />
        </div>
    );
}

export default Login;
