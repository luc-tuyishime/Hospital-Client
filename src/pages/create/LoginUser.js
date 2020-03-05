import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import MenuBar from '../../components/MenuBar';

import "../../styles/register.css";


class LoginUser extends Component {
    render() {
        return (
            <>
                <MenuBar />
                <div className="form-container">
                    <Form>
                        <h1>Login User</h1>
                        <Form.Input
                            label="email"
                            placeholder="Email...."
                            name="email"
                            type="text"
                        />
                        <Form.Input
                            label="password"
                            placeholder="Password...."
                            name="password"
                            type="password"
                        />
                        <Button type="submit" primary>
                            Login
                    </Button>
                        <p>Don't have an account ?<Link to='/create-user'> Create User</Link>
                        </p>
                    </Form>
                </div>
            </>
        )
    }
};




export default LoginUser;
