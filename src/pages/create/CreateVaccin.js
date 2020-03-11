import React, { Component } from "react";
import { Form, Button, Message, Select } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import MenuBar2 from '../../components/MenuBar2';

import { create } from '../../actions/vaccin';
import { validateHospital } from '../../helpers/validation';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { vaccinOptions } from '../../helpers/vaccinList';
import "../../styles/register.css";


class CreateVaccin extends Component {

    state = {
        form: {
            childId: '',
            type: '',
            vaccinationDate: ''
        },
        errors: {},
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
        const formErrors = validateHospital(form, 'newVaccin');

        this.setState({ errors: { ...errors, ...formErrors } });

        if (!Object.keys(formErrors).length && isAuth) {
            create(formData)
        }
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        const alertMessage = (nextProps.message && nextProps.message)
            || (nextProps.errors && nextProps.errors);
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
                <div className="form-container">
                    {!isAuth ? (
                        <Message negative>
                            <p>You are not authenticated. please <Link to="/login-user">log in</Link></p>
                        </Message>
                    ) : (
                            <Message positive>
                                <p>
                                    You are Adding Vaccin as{''} <b>{profile.firstName}</b> <b>{profile.lastName}</b>
                                </p>
                            </Message>

                        )}
                    {(message || errors[0] || errors.token) ? (
                        <Message color={(message && 'green') || (errors[0] && 'red') || (errors.token && 'red')}>
                            {message || errors[0] || errors.token}
                        </Message>
                    ) : ''}
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Create Vaccin</h1>
                        <Form.Input
                            label="Child ID"
                            placeholder="child id...."
                            name="childId"
                            type="text"
                            onChange={this.handleChange}
                            value={form.childId || ""}
                            error={errors.childId}
                        />
                        <Form.Field
                            control={Select}
                            label='Type'
                            onChange={this.handleChange}
                            options={vaccinOptions}
                            placeholder='Vaccin Type....'
                            name='type'
                            value={form.type || ""}
                            error={errors.type}
                        />
                        <Form.Group widths='equal'>
                            <SemanticDatepicker
                                label="Vaccination Date"
                                name="vaccinationDate"
                                onChange={this.handleChange}
                                value={form.vaccinationDate || ""}
                                error={errors.vaccinationDate}
                            />
                        </Form.Group>
                        {!isAuth ? (<Message negative>
                            <p>You are not authenticated. please <Link to="/login-user">log in</Link></p>
                        </Message>) : (
                                <Button type="submit" primary loading={loading}>
                                    Create
                        </Button>
                            )}
                    </Form>
                </div>
            </>
        )
    }
};

CreateVaccin.propTypes = {
    loading: PropTypes.bool,
    isAuth: PropTypes.bool,
    message: PropTypes.string,
    create: PropTypes.func,
    onClearSignupErrors: PropTypes.func
};

const mapStateToProps = ({
    user: { isAuth, profile },
    vaccin: { createVaccin: { loading, message, errors } } }) => ({
        profile,
        isAuth,
        loading,
        message,
        errors
    });




export default connect(mapStateToProps, { create })(CreateVaccin);
