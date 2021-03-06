import _ from 'lodash';
import React, { Component } from 'react';
import { Header, Icon, Table, Container, Message, Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { get } from '../../actions/parent';
import MenuBar from '../../components/MenuBar';
import '../../styles/register.css';


class ViewParents extends Component {

    state = {
        page: 1,
        itemsPerPage: 7,
        parents: []
    }

    componentDidMount = () => {
        const { get } = this.props;
        get();
    };

    setPageNum = (event, { activePage }) => {
        this.setState({ page: activePage });
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.setState({
            parents: nextProps.listOfParents
        });

        return this.setState;
    };

    render() {
        const { parents } = this.state
        const itemsPerPage = 7;
        const { page } = this.state;
        const totalPages = parents.length / itemsPerPage;
        const items = parents.slice(
            (page - 1) * itemsPerPage,
            (page - 1) * itemsPerPage + itemsPerPage
        );
        return (
            <>
                <MenuBar />
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>Parents</Header.Content>
                </Header>
                <Container>
                    {parents.length > 0 ?
                        <>
                            <Table singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                            id
                           </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            userId
                            </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            firstName
                              </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            lastName
                              </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            email
                              </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            Phone
                              </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            createdAt
                              </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {_.map(items, ({ id, userId, firstName, lastName, email, phone, createdAt }) => (
                                        <Table.Row key={id}>
                                            <Table.Cell>{id}</Table.Cell>
                                            <Table.Cell>{userId}</Table.Cell>
                                            <Table.Cell>{firstName}</Table.Cell>
                                            <Table.Cell>{lastName}</Table.Cell>
                                            <Table.Cell>{email}</Table.Cell>
                                            <Table.Cell>{phone}</Table.Cell>
                                            <Table.Cell>{moment(createdAt).format("dddd, MMMM Do YYYY")}</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                            <div className="center-pagination">
                                <Pagination
                                    activePage={page}
                                    totalPages={totalPages}
                                    siblingRange={1}
                                    onPageChange={this.setPageNum}
                                />
                            </div>
                        </> :
                        <Message info>
                            <p className="center-text">No Parents available, Please create..</p>
                        </Message>}
                </Container>
            </>
        )
    }
}

ViewParents.propTypes = {
    loading: PropTypes.bool,
    isAuth: PropTypes.bool,
    message: PropTypes.string,
};

const mapStateToProps = ({
    user: { profile },
    parent: { listOfParents, fetchParents: { loading, message, errors } } }) => ({
        listOfParents,
        profile,
        loading,
        message,
        errors
    });

export default connect(mapStateToProps, { get })(ViewParents);