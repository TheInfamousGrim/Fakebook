// Import dependencies
import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

function SignInForm() {
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

export default SignInForm;
