// Import dependencies
import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Navigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// Custom hooks
import { useForm } from '../../utils/hooks';

// Authorization
import { AuthContext } from '../../context/auth';
import Auth from '../../utils/Auth';

// Import mutations
import { LOGIN_USER, REGISTER_USER } from '../../utils/mutations.js';

function Login() {
    const context = useContext(AuthContext);
    const [login, { error, data }] = useMutation(LOGIN_USER);
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const onChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
            // clear form values
            setFormState({
                email: '',
                password: '',
            });
            return <Navigate to="/" />;
        } catch (e) {
            console.error(e);
            // clear form values
            setFormState({
                email: '',
                password: '',
            });
        }
    };

    return (
        <div className="login bg-whitish text-blackText bg-login-pattern bg-no-repeat h-screen flex justify-center items-center">
            <div className="login_wrapper h-4/5">
                <div className="login_wrap">
                    <div className="login_1 w-96 my-0 mx-auto">
                        <h1 className="text-3xl">Fakebook</h1>
                        <span className="text-xl">
                            Fakebook helps you connect and share with the people in your life.
                        </span>
                    </div>

                    <div className="login_2 text-center">
                        <div className="login_2_wrap bg-white radius rounded-3xl p-4 my-4 flex flex-col items-center gap-7 w-96 h-fit my-0 mx-auto shadow-xl shadow-black">
                            <form className="w-full" onSubmit={handleFormSubmit}>
                                <div widths="equal w-full flex flex-col gap-5">
                                    <input
                                        fluid
                                        placeholder="Email Address"
                                        name="email"
                                        className="color-placeholderColor w-ful p-4 border-b-2 border-darkWhite"
                                        value={formState.email}
                                        error={!!errors.email}
                                        onChange={onChange}
                                    />
                                    <input
                                        fluid
                                        placeholder="Password"
                                        name="password"
                                        className="color-placeholderColor w-ful p-4 border-b-2 border-darkWhite"
                                        value={formState.password}
                                        error={!!errors.password}
                                        onChange={onChange}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
