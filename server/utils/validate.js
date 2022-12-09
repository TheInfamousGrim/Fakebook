const emailValidator = (email) => {
    // Check the email field isn't empty
    if (email.trim() === '') {
        errors.email = 'Email must not be empty';
    } else {
        // Check that the user has correctly input an email
        const regex =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if (!email.match(regex)) {
            errors.email = 'Email must be a valid email address';
        }
    }
};

const validateRegisterInput = (
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    gender,
    birthYear,
    birthMonth,
    birthDay
) => {
    // Create an empty errors object
    const errors = {};

    // Check the first name field isn't empty
    if (firstName.trim() === '') {
        errors.first_name = 'Username must not be empty';
    }

    // Check the last name field isn't empty
    if (lastName.trim() === '') {
        errors.last_name = 'Username must not be empty';
    }

    // Check the email field isn't empty
    emailValidator(email);

    // Check that the password field isn't empty
    if (password === '') {
        errors.password = 'Password must not be empty';
        // Check if the passwords match up
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match, please ensure they are exactly the same';
    } else if (password.length < 8) {
        errors.password = 'Password must be 8 characters or greater';
    }

    // Check that the gender field has been filled in
    if (gender === '') {
        errors.gender = 'Please select a gender that you indentify with';
    }

    // Check the birth year field has been filled in
    if (birthYear === '') {
        errors.birth_year = 'Please enter your year of birth';
    }

    // Check that the birth month field has been filled in
    if (birthMonth === '') {
        errors.birth_month = 'Please enter your month of birth';
    }

    // Check that the birth day field has been filled in
    if (birthDay === '') {
        errors.birth_day = 'Please enter your day of birth';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1,
    };
};

const validateUserLogin = (email, password) => {
    const errors = {};
    emailValidator(email);
    if (password === '') {
        errors.password = 'Password must not be empty';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1,
    };
};

module.exports = { validateRegisterInput, validateUserLogin };
