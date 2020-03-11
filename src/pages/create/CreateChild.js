import React, { Component } from "react";
import { Form, Button, Message, Select } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { ToastContainer, toast } from 'react-toastify';

import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import MenuBar2 from '../../components/MenuBar2';
import { validateHospital } from '../../helpers/validation';
import { create } from '../../actions/child/';

import "../../styles/register.css";

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' }
]


class CreateChild extends Component {

    state = {
        form: {
            firstName: '',
            lastName: '',
            birth: '',
            sex: '',
            parentId: ''
        },
        errors: '',
        loading: false,
        message: ''
    };

    handleChange = (_, data) => {
        const { form, errors } = this.state;
        this.setState({
            form: { ...form, [data.name]: data.value },
            errors: { ...errors, [data.name]: null },
            loading: false,
            message: ''
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { create, isAuth } = this.props;
        const { errors, form } = this.state;
        const { ...formData } = form;
        const formErrors = validateHospital(form, 'newChild');

        this.setState({ errors: { ...errors, ...formErrors } });

        if (!Object.keys(formErrors).length && isAuth) {
            create(formData)
        }
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        const alertMessage = (nextProps.message && toast.success(nextProps.message))
            || (nextProps.errors && toast.error(nextProps.errors));
        this.setState({
            errors: nextProps.errors,
            message: nextProps.message
        })
        return !nextProps.loading && alertMessage;
    };

    render() {
        const { loading, isAuth, profile } = this.props;
        const { form, message, errors } = this.state;
        return (
            <>
                <MenuBar2 />
                <div className="form-container-inline">
                    <ToastContainer position={toast.POSITION.TOP_CENTER} />
                    {isAuth &&
                        <Message positive>
                            <p>
                                You are Adding Child as{''} <b>{profile.firstName}</b> <b>{profile.lastName}</b>
                            </p>
                        </Message>
                    }
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Create Child</h1>
                        <Form.Group widths='equal'>

                            <Form.Input
                                label="FirstName"
                                placeholder="firstName...."
                                name="firstName"
                                type="text"
                                onChange={this.handleChange}
                                value={form.firstName || ""}
                                error={errors.firstName}
                            />

                            <Form.Input
                                label="LastName"
                                placeholder="lastName...."
                                name="lastName"
                                type="text"
                                onChange={this.handleChange}
                                value={form.lastName || ""}
                                error={errors.lastName}
                            />

                        </Form.Group>
                        <Form.Group widths='equal'>
                            <SemanticDatepicker
                                label="Birth date"
                                name="birth"
                                onChange={this.handleChange}
                                value={form.birth || ""}
                                error={errors.birth}
                            />
                            <Form.Field
                                control={Select}
                                label='Gender'
                                onChange={this.handleChange}
                                options={options}
                                placeholder='Gender'
                                name='sex'
                                value={form.sex || ""}
                                error={errors.sex}
                            />
                        </Form.Group>
                        <Form.Input
                            label="ParentId"
                            placeholder="Parent ID...."
                            name="parentId"
                            type="text"
                            onChange={this.handleChange}
                            value={form.parentId || ""}
                            error={errors.parentId}
                        />

                        {!isAuth ? (<Message negative>
                            <p>You are not authenticated. please <Link to="/login-user">log in</Link></p>
                        </Message>) : (
                                <Button type="submit" primary loading={loading}>
                                    Create
                        </Button>
                            )}
                        {message.includes('Child created and associated to parent..') &&
                            <div className="text-create-user">
                                <Link to='/create-vaccines'> Create Vaccin</Link>
                            </div>}
                    </Form>
                </div>
            </>

        )
    }
};

CreateChild.propTypes = {
    loading: PropTypes.bool,
    isAuth: PropTypes.bool,
    message: PropTypes.string,
    create: PropTypes.func,
    onClearSignupErrors: PropTypes.func
};

const mapStateToProps = ({
    user: { isAuth, profile },
    child: { createChild: { loading, message, errors } } }) => ({
        profile,
        isAuth,
        loading,
        message,
        errors
    });



export default connect(mapStateToProps, { create })(CreateChild);
