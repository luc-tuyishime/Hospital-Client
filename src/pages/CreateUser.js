import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

import "../styles/register.css";


class CreateUser extends Component {
    render() {
        return (
            <div className="form-container">
                <Form>
                    <h1>Create User</h1>
                    <Form.Input
                        label="firstName"
                        placeholder="firstName...."
                        name="firstName"
                        type="text"
                    />
                    <Form.Input
                        label="lastName"
                        placeholder="lastName...."
                        name="lastName"
                        type="text"
                    />
                    <Form.Input
                        label="username"
                        placeholder="username...."
                        name="username"
                        type="text"
                    />
                    <Form.Input
                        label="email"
                        placeholder="Email...."
                        name="email"
                    />
                    <Form.Input
                        label="password"
                        placeholder="Password...."
                        name="password"
                        type="password"
                    />
                    <Form.Input
                        label="role"
                        placeholder="role...."
                        name="role"
                        type="text"
                    />
                    <Form.Input
                        label="phone"
                        placeholder="phone...."
                        name="phone"
                        type="text"
                    />
                    <Button type="submit" primary>
                        Create
          </Button>
                </Form>
            </div>
        )
    }
};



export default CreateUser;
