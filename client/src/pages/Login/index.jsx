// Import dependencies
import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Custom hooks
import { useForm } from '../../utils/hooks';

function Login() {
    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: '',
    });

    function loginUserCallback() {
        loginUser();
    }

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
                            <Form className="w-full" noValidate>
                                <Form.Group widths="equal w-max">
                                    <Form.Input
                                        fluid
                                        placeholder="Email Address"
                                        name="email"
                                        className="color-placeholderColor w-max"
                                        value={values.email}
                                        onChange={onChange}
                                    />
                                    <Form.Input
                                        fluid
                                        placeholder="Password"
                                        name="password"
                                        className="color-placeholderColor w-max"
                                        value={values.password}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Button
                                    type="submit"
                                    className="py-2 w-full rounded-2xl flex justify-center items-center bg-gradient-to-r from-darkerPink to-pink shadow-2xl text-white font-bold"
                                >
                                    Login
                                </Form.Button>
                            </Form>
                            <div className="border border-grey rounded w-full" />
                            <button className="py-3 w-full rounded-2xl flex justify-center items-center bg-green shadow-2xl text-white font-bold">
                                Create Account
                            </button>
                        </div>
                        <p>Fake interface for a real interaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
