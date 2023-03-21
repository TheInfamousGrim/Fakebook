// Import dependencies
import React from 'react';
import { useForm } from 'react-hook-form';

// Components
import FormErrors from '../formErrors';

function SignInForm({ handleLoginFormSubmit, loginFormState, loginErrors, onLoginFormChange, setRegisterModalOpen }) {
    // Integrate react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="login_2 text-center flex flex-col gap-10">
            <div className="login_2_wrap bg-white radius rounded-3xl p-5 my-4 flex flex-col items-center gap-7 w-96 h-fit my-0 mx-auto shadow-xl shadow-black">
                <form className="w-full" onSubmit={handleSubmit(handleLoginFormSubmit)} noValidate>
                    <div className="w-full flex flex-col gap-5">
                        <input
                            {...register('email', { required: 'Email address is required' })}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Email Address"
                            className="color-placeholderColor w-full p-4 border-x-0 border-t-0 border-b-2 border-darkWhite focus:border-b-pink focus:border-t-0 focus:border-x-0"
                            value={loginFormState.email}
                            onChange={onLoginFormChange}
                            aria-invalid={errors.email ? 'true' : 'false'}
                        />
                        {/* {loginErrors.errors?.email && (
                            <p role="alert" className="mt-2 ml-4 text-sm text-red-600 text-left">
                                Email address is required
                            </p>
                        )} */}
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Password"
                            className="color-placeholderColor w-full p-4 border-x-0 border-t-0 border-b-2 border-darkWhite"
                            value={loginFormState.password}
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
                <div className="border border-darkWhite rounded w-full" />
                <button
                    type="button"
                    className="py-2 w-full rounded-2xl flex justify-center items-center bg-green shadow-2xl text-white font-bold"
                    onClick={() => setRegisterModalOpen(true)}
                >
                    Create Account
                </button>
            </div>
            <p>Fake interface for a real interaction</p>
        </div>
    );
}

export default SignInForm;
