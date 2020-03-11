import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { create } from '../../actions/parent';
import MenuBar2 from '../../components/MenuBar2';
import { validateHospital } from '../../helpers/validation';
import "../../styles/register.css";


class CreateParent extends Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        errors: {},
        message: '',
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
        const { create, isAuth } = this.props;
        const { errors, form } = this.state;
        const { ...formData } = form;
        const formErrors = validateHospital(form, 'newParent');

        this.setState({ errors: { ...errors, ...formErrors } });

        if (!Object.keys(formErrors).length && isAuth) {
            create(formData)
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
        const { loading, isAuth, profile } = this.props;
        const { form, message, errors } = this.state;
        return (
            <>
                <MenuBar2 />
                <div className="form-container-inline">
                    {!isAuth ? (
                        <Message negative>
                            <p>You are not authenticated. please <Link to="/login-user">log in</Link></p>
                        </Message>
                    ) : (
                            <Message positive>
                                <p>
                                    You are Adding Parent as{''} <b>{profile.firstName}</b> <b>{profile.lastName}</b>
                                </p>
                            </Message>

                        )}
                    {(message || errors.message || errors.token) ? (
                        <Message color={(message && 'green') || (errors.message && 'red') || (errors.token && 'red')}>
                            {message || errors.message || errors.token}
                        </Message>
                    ) : ''}
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Create Parent</h1>
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
                                label="email"
                                placeholder="Email...."
                                name="email"
                                onChange={this.handleChange}
                                value={form.email || ""}
                                error={errors.email}
                            />
                            <Form.Input
                                label="phone"
                                placeholder="phone...."
                                name="phone"
                                type="text"
                                onChange={this.handleChange}
                                value={form.phone || ""}
                                error={errors.phone}
                            />
                        </Form.Group>
                        {profile.role === 'admin' &&
                            <Button type="submit" primary loading={loading}>
                                Create
                        </Button>}
                        {message.includes('parent created..') &&
                            <div className="text-create-user">
                                <Link to='/create-child'> Create Child</Link>
                            </div>}
                    </Form>
                </div>
            </>
        )
    }
};

CreateParent.propTypes = {
    loading: PropTypes.bool,
    isAuth: PropTypes.bool,
    message: PropTypes.string,
    signupHospital: PropTypes.func,
    onClearSignupErrors: PropTypes.func
};

const mapStateToProps = ({
    user: { isAuth, profile },
    parent: { createParent: { loading, message, errors } } }) => ({
        profile,
        isAuth,
        loading,
        message,
        errors
    });


export default connect(mapStateToProps, { create })(CreateParent);
