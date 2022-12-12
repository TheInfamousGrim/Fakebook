import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
];

function SignUpForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    return (
        <div>
            <Form onSubmit={onSumbit} noValidate>
                <Form.Input placeholder="email address" name="email" value={values.email} onChange={onChange} />
                <Form.Input placeholder="password" name="password" value={values.password} onChange={onChange} />
            </Form>
        </div>
    );
}

export default SignUpForm;
