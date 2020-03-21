import React from 'react';
import { Form } from "semantic-ui-react";

const Input = ({ label, placeholder, name, ...rest }) => {
    // eslint-disable-next-line no-unused-expressions
    <Form.Input label={label} placeholder={placeholder} name={name} {...rest} />
}

export default Input;