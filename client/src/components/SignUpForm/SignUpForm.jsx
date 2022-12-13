import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
];

const yearTemp = new Date().getFullYear();

const years = Array.from(new Array(108), (val, index) => yearTemp - index);
const months = Array.from(new Array(12), (val, index) => 1 + index);
const getDays = () => new Date(bYear, bMonth, 0).getDate();

function SignUpForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    return (
        <div>
            <div>
                <h1>Sign Up</h1>
                <p>It's quick and easy</p>
            </div>
            <div className="border border-grey rounded w-full" />
            <Form>
                <Form.Group widths="equal">
                    <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="First name"
                        placeholder="First name"
                    />
                    <Form.Field
                        id="form-input-control-last-name"
                        control={Input}
                        label="Last name"
                        placeholder="Last name"
                    />
                    <Form.Input />
                    <Form.Input />
                    <Form.Select fluid label="Gender" options={genderOptions} placeholder="Gender" />
                </Form.Group>
                <Form.TextArea label="About" placeholder="Tell us more about you..." />
                <Form.Checkbox label="I agree to the Terms and Conditions" />
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    );
}

export default SignUpForm;
