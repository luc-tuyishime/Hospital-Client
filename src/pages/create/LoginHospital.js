import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { validateHospital } from '../../helpers/validation';
import { login } from '../../actions/hospital';
import MenuBar from '../../components/MenuBar';

import "../../styles/register.css";


class LoginUser extends Component {

    state = {
        form: {
            email: '',
            password: '',
        },
        errors: {},
        message: '',
        redirect: ''
    };


    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.message && nextProps.message.includes('signIn successfully')) {
            this.props.history.push('/create-user');
        }
        const { errors } = this.state;
        this.setState({ errors: { ...errors, ...nextProps.errors } });
    }

    handleChange = (e) => {
        const { form, errors } = this.state;
        this.setState({
            form: { ...form, [e.target.name]: e.target.value },
            errors: { ...errors, [e.target.name]: null },
            loading: false,
            message: ''
        });

    };

    handeleSubmit = (e) => {
        e.preventDefault();
        const { form, errors } = this.state;
        const { login } = this.props;
        const { ...formData } = form;
        const formErrors = validateHospital(form, 'loginUser');

        this.setState({ errors: { ...errors, ...formErrors } });

        if (!Object.keys(formErrors).length) {
            login(formData);
        }
    };

    render() {
        const { loading } = this.props;
        const { email, password, errors } = this.state;
        return (
            <>
                <MenuBar />
                <div className="form-container">
                    {(errors.credentials || errors.account) && (
                        <Message color='red'>
                            {errors.credentials || errors.account}
                        </Message>
                    )}
                    <Form onSubmit={this.handeleSubmit}>
                        <h1>Login hospital</h1>
                        <Form.Input
                            label="email"
                            placeholder="Email...."
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={email}
                            error={errors.email}
                        />
                        <Form.Input
                            label="password"
                            placeholder="Password...."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                            value={password}
                            error={errors.password}
                        />
                        <Button type="submit" primary loading={loading}>
                            Login
                    </Button>
                        <p>Don't have an account ?<Link to='/'> Create Hospital</Link>
                        </p>
                    </Form>
                </div>
            </>
        )
    }
};


LoginUser.defaultProps = { location: { search: '' }, profile: {} };

LoginUser.propTypes = {
    loading: PropTypes.bool,
    profile: PropTypes.object,
    login: PropTypes.func,
    user: PropTypes.object,
    location: PropTypes.object,
    errors: PropTypes.object
};

const mapStateToProps = ({
    hospital: {
        login: { errors, message, loading },
        profile
    }
}) => ({
    errors,
    message,
    loading,
    profile
});



export default connect(mapStateToProps, { login })(LoginUser);
