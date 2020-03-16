import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { validateHospital } from '../../helpers/validation';
import { signup } from '../../actions/hospital';
import MenuBar from '../../components/MenuBar';

import "../../styles/register.css";



class RegisterHospital extends Component {

    state = {
        form: {
            name: '',
            email: '',
            password: ''
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
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { signupHospital } = this.props;
        const { errors, form } = this.state;
        const { confirmPassword, ...formData } = form;
        const formErrors = validateHospital(form, 'newHospital');

        this.setState({ errors: { ...errors, ...formErrors } });

        if (!Object.keys(formErrors).length) {
            signupHospital(formData);
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
        const { loading } = this.props;
        const { form, message, errors } = this.state;
        return (
            <>
                <MenuBar />
                <div className="form-container">
                    {(message || errors.message) && (
                        <Message color={(message && 'green') || (errors.message && 'red')}>
                            {message || errors.message}
                        </Message>
                    )}
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Create Hospital</h1>
                        <Form.Input
                            label="Name"
                            placeholder="Name...."
                            name="name"
                            type="text"
                            onChange={this.handleChange}
                            value={form.name || ""}
                            error={errors.name}
                        />
                        <Form.Input
                            label="Email"
                            placeholder="Email...."
                            name="email"
                            onChange={this.handleChange}
                            value={form.email || ""}
                            error={errors.email}

                        />
                        <Form.Input
                            label="Password"
                            placeholder="Password...."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                            value={form.password || ""}
                            error={errors.password}
                        />
                        <Button type="submit" primary loading={loading}>
                            Register
                    </Button>
                        {message.includes('hospital created. Please login') &&
                            <div className="text-create-user">
                                <Link to='/login-hospital'> Login hospital</Link>
                            </div>}

                    </Form>
                </div>
            </>
        )
    }
};

RegisterHospital.propTypes = {
    loading: PropTypes.bool,
    message: PropTypes.string,
    errors: PropTypes.object,
    signupHospital: PropTypes.func,
    onClearSignupErrors: PropTypes.func
};

const mapStateToProps = ({
    hospital: { profile },
    hospital: { signup: { loading, message, errors } } }) => ({
        profile,
        loading,
        message,
        errors
    });

const mapDispatchToProps = dispatch => ({ signupHospital: payload => dispatch(signup(payload)) });



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterHospital);
