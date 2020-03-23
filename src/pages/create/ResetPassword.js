import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/user';
import MenuBar from '../../components/MenuBar';

import "../../styles/register.css";


class ResetPassword extends Component {

    state = {
        form: {
            newPassword: '',
            confirmNewPassword: ''
        }
    };

    handleChange = (e) => {
        const { form } = this.state;
        this.setState({ form: { ...form, [e.target.name]: e.target.value } });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { form: { newPassword, confirmNewPassword } } = this.state;
        const {
            resetPassword,
            match: { params: { token } }
        } = this.props;
        if (!newPassword || !confirmNewPassword) {
            return toast.error('Please fill the form..');
        }
        if (newPassword !== confirmNewPassword) {
            return toast.error('The passwords are not matching');
        }

        const { message } = await resetPassword(
            {
                newPassword,
                confirmNewPassword
            },
            token
        );
        this.setState({ form: { newPassword: '', confirmNewPassword: '' } });
        return message;
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        const alertMessage = (nextProps.message && toast.success(nextProps.message))
            || (nextProps.errors && toast.error(nextProps.errors.message));

        return !nextProps.loading && alertMessage;
    };


    render() {
        const { loading } = this.props;
        const { form } = this.state;
        return (
            <>
                <MenuBar />
                <div className="form-container">
                    <ToastContainer position={toast.POSITION.TOP_CENTER} />
                    <br />
                    <Form onSubmit={this.handleSubmit}>
                        <Message info>
                            <p>
                                Password must include at least 8 characters including at
                                least 1 upper, lower case letter, 1 number and 1 special
                                 character.
                            </p>
                        </Message>
                        <Form.Input
                            label="New Password"
                            placeholder="New Password...."
                            name="newPassword"
                            type="password"
                            onChange={this.handleChange}
                            value={form.newPassword}
                        />
                        <Form.Input
                            label="Confirm New Password"
                            placeholder="Confirm New Password...."
                            name="confirmNewPassword"
                            type="password"
                            onChange={this.handleChange}
                            value={form.confirmNewPassword}
                        />
                        <Button type="submit" primary loading={loading}>
                            Update Password
                    </Button>
                        <p>Change your mind? <Link to='/login-user'>Login User</Link>
                        </p>
                    </Form>
                </div>
            </>
        )
    }
};


ResetPassword.defaultProps = { location: { search: '' }, profile: {} };

ResetPassword.propTypes = {
    loading: PropTypes.bool,
    profile: PropTypes.object,
    login: PropTypes.func,
    user: PropTypes.object,
    location: PropTypes.object,
    errors: PropTypes.object
};

const mapStateToProps = ({
    user: {
        resetPassword: { errors, message, loading }
    }
}) => ({
    errors,
    message,
    loading
});



export default connect(mapStateToProps, { resetPassword })(ResetPassword);
