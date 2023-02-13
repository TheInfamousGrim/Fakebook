// Import dependencies
import React from 'react';

function SignInForm({ handleLoginFormSubmit, loginFormState, loginErrors, onLoginFormChange }) {
    return (
        <div className="login_2 text-center flex flex-col gap-10">
            <div className="login_2_wrap bg-white radius rounded-3xl p-5 my-4 flex flex-col items-center gap-7 w-96 h-fit my-0 mx-auto shadow-xl shadow-black">
                <form className="w-full" onSubmit={handleLoginFormSubmit}>
                    <div widths="equal w-full flex flex-col gap-5">
                        <input
                            fluid
                            placeholder="Email Address"
                            name="email"
                            className="color-placeholderColor w-full p-4 border-b-2 border-darkWhite"
                            value={loginFormState.email}
                            error={!!loginErrors.email}
                            onChange={onLoginFormChange}
                        />
                        <input
                            fluid
                            placeholder="Password"
                            name="password"
                            className="color-placeholderColor w-full p-4 border-b-2 border-darkWhite"
                            value={loginFormState.password}
                            error={!!loginErrors.password}
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
                <button
                    type="button"
                    className="py-3 w-full rounded-2xl flex justify-center items-center bg-green shadow-2xl text-white font-bold"
                >
                    Create Account
                </button>
            </div>
            <p>Fake interface for a real interaction</p>
        </div>
    );
}

export default SignInForm;
