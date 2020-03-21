import _ from 'lodash';
import React, { Component } from 'react';
import { Header, Icon, Table, Container, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { get } from '../../actions/child';
import MenuBar from '../../components/MenuBar';
import '../../styles/register.css';


class ViewChildren extends Component {

    state = {
        children: []
    }

    componentDidMount = () => {
        const { get } = this.props;
        get();
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.setState({
            children: nextProps.listOfChildren
        });

        return this.setState;
    };

    render() {
        const { children } = this.state

        return (
            <>
                <MenuBar />
                <Header as='h2' icon textAlign='center'>
                    <Icon name='child' circular />
                    <Header.Content className="children-text">Children with Parents associated</Header.Content>
                </Header>
                <Container>
                    {children ? <Table celled structured>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell rowSpan='2'>id</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2'>userId</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2'>firstname</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2'>lastname</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2'>birth</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2'>sex</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2'>createdAt</Table.HeaderCell>
                                <Table.HeaderCell colSpan='3'>Parents</Table.HeaderCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>id</Table.HeaderCell>
                                <Table.HeaderCell>firstName</Table.HeaderCell>
                                <Table.HeaderCell>Phone</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {_.map(children, ({ id, userId, firstName, lastName, birth, sex, createdAt,
                                parents: [{ id: idParent, firstName: firstNameParent, phone }] }, ) => (

                                    <Table.Row key={id}>
                                        <Table.Cell>{id}</Table.Cell>
                                        <Table.Cell>{userId}</Table.Cell>
                                        <Table.Cell>{firstName}</Table.Cell>
                                        <Table.Cell>{lastName}</Table.Cell>
                                        <Table.Cell>{moment(birth).format("dddd, MMMM Do YYYY")}</Table.Cell>
                                        <Table.Cell>{sex}</Table.Cell>
                                        <Table.Cell>{moment(createdAt).format("dddd, MMMM Do YYYY")}</Table.Cell>
                                        <Table.Cell>{idParent}</Table.Cell>
                                        <Table.Cell>{firstNameParent}</Table.Cell>
                                        <Table.Cell>{phone}</Table.Cell>
                                    </Table.Row>
                                ))}
                        </Table.Body>
                    </Table> :
                        <Message info>
                            <p className="center-text">No Children available, Please create..</p>
                        </Message>
                    }
                </Container>
            </>
        )
    }
}

ViewChildren.propTypes = {
    loading: PropTypes.bool,
    isAuth: PropTypes.bool,
    message: PropTypes.string,
};

const mapStateToProps = ({
    user: { profile },
    child: { listOfChildren, fetchChildren: { loading, message, errors } } }) => ({
        listOfChildren,
        profile,
        loading,
        message,
        errors
    });

export default connect(mapStateToProps, { get })(ViewChildren);