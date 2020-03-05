import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

import { create } from '../../actions/user';
import MenuBar from '../../components/MenuBar';
import { validateHospital } from '../../helpers/validation';

import "../../styles/register.css";


class CreateUser extends Component {

    state = {
        form: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            role: '',
            phone: ''
        },
        errors: {},
        loading: false,
        message: ''
    };

    handleChange = (e) => {
        const { form, errors } = this.state;

        this.setState({
            form: { ...form, [e.target.name]: e.target.value },
            errors: { ...errors, [e.target.name]: null },
            loading: false,
            message: ''
        });
        console.log(form);
    };

    UNSAFE_componentWillMount() {
        const { listOfUsers } = this.props;
        this.setState({ listOfUsers });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { createUser } = this.props;
        const { errors, form } = this.state;
        const { confirmPassword, ...formData } = form;
        const formErrors = validateHospital(form, 'newUser');

        this.setState({ errors: { ...errors, ...formErrors } });

        if (!Object.keys(formErrors).length) {
            createUser(formData);
        }
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        const { errors } = this.state;
        this.setState({
            message: nextProps.message,
            errors: { ...errors, ...nextProps.errors }
        });

        return nextProps.message && this.setState({ form: {} });
    };


    render() {
        const { loading, isAuth } = this.props;
        const { form, message, errors } = this.state;
        return (
            <>
                <MenuBar />
                <div className="form-container-inline">
                    {(message || errors.message) && (
                        <Message color={(message && 'green') || (errors.message && 'red')}>
                            {message || errors.message}
                        </Message>
                    )}
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Create User</h1>
                        <Form.Group widths='equal'>

                            <Form.Input
                                label="firstName"
                                placeholder="firstName...."
                                name="firstName"
                                type="text"
                                onChange={this.handleChange}
                                value={form.firstName || ""}
                                error={errors.firstName}
                            />

                            <Form.Input
                                label="lastName"
                                placeholder="lastName...."
                                name="lastName"
                                type="text"
                                onChange={this.handleChange}
                                value={form.lastName || ""}
                                error={errors.lastName}
                            />

                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                label="username"
                                placeholder="username...."
                                name="username"
                                type="text"
                                onChange={this.handleChange}
                                value={form.username || ""}
                                error={errors.username}
                            />
                            <Form.Input
                                label="email"
                                placeholder="Email...."
                                name="email"
                                onChange={this.handleChange}
                                value={form.email || ""}
                                error={errors.email}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                label="password"
                                placeholder="Password...."
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                value={form.password || ""}
                                error={errors.password}
                            />
                            <Form.Input
                                label="role"
                                placeholder="role...."
                                name="role"
                                type="text"
                                onChange={this.handleChange}
                                value={form.role || ""}
                                error={errors.role}
                            />
                        </Form.Group>
                        <Form.Input
                            label="phone"
                            placeholder="phone...."
                            name="phone"
                            type="text"
                            onChange={this.handleChange}
                            value={form.phone || ""}
                            error={errors.phone}
                        />
                        {isAuth ?
                            <Button type="submit" primary loading={loading}>
                                Create
                        </Button> :
                            <Message info>
                                <p>You are not logged in</p>
                            </Message>}
                    </Form>

                </div>
            </>
        )
    }
};

CreateUser.propTypes = {
    loading: PropTypes.bool,
    isAuth: PropTypes.bool,
    profile: PropTypes.object,
    listOfUsers: PropTypes.array,
    message: PropTypes.string,
    errors: PropTypes.object,
    signupHospital: PropTypes.func,
    onClearSignupErrors: PropTypes.func
};

const mapStateToProps = ({
    hospital: { isAuth, profile },
    user: { createUser: { listOfUsers, loading, message, errors } } }) => ({
        isAuth,
        profile,
        listOfUsers,
        loading,
        message,
        errors
    });

const mapDispatchToProps = dispatch => ({ createUser: payload => dispatch(create(payload)) });


export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
