import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { regularExpression } from '../../helpers/user/formValidator';
import { forgotPassword } from '../../actions/user';
import MenuBar from '../../components/MenuBar';

import "../../styles/register.css";


class ForgotPassword extends Component {

    state = {
        email: '',
        loading: false
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email } = this.state;

        if (regularExpression.test(email)) {
            const isEmailSent = await this.props.forgotPassword(email);
            this.setState({ email: '' });
            return isEmailSent;
        }

        return toast.error('Please enter your Email');
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        const alertMessage = (nextProps.message && toast.success(nextProps.message))
            || (nextProps.errors && toast.error(nextProps.errors.message));

        return !nextProps.loading && alertMessage;
    };


    render() {
        const { loading } = this.props;
        const { email } = this.state;
        return (
            <>
                <MenuBar />
                <div className="form-container">
                    <ToastContainer position={toast.POSITION.TOP_CENTER} />
                    <br />
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Enter Your Email</h1>
                        <Form.Input
                            label="email"
                            placeholder="Email...."
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={email}
                        />
                        <Button type="submit" primary loading={loading}>
                            Send
                    </Button>
                        <p>Change your mind? <Link to='/login-user'>Login User</Link>
                        </p>
                    </Form>
                </div>
            </>
        )
    }
};


ForgotPassword.defaultProps = { location: { search: '' }, profile: {} };

ForgotPassword.propTypes = {
    loading: PropTypes.bool,
    profile: PropTypes.object,
    login: PropTypes.func,
    user: PropTypes.object,
    location: PropTypes.object,
    errors: PropTypes.object
};

const mapStateToProps = ({
    user: {
        forgotPassword: { errors, message, loading },
        profile
    }
}) => ({
    errors,
    message,
    loading,
    profile
});



export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);
