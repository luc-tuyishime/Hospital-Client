import _ from 'lodash';
import React, { Component } from 'react';
import { Header, Icon, Table, Container, Message, Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { get } from '../../actions/vaccin';
import MenuBar from '../../components/MenuBar';
import '../../styles/register.css';


class ViewVaccines extends Component {

    state = {
        page: 1,
        itemsPerPage: 7,
        vaccines: []
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
            vaccines: nextProps.vaccines
        });

        return this.setState;
    };

    render() {
        const { vaccines } = this.state;
        const itemsPerPage = 7;
        const { page } = this.state;
        const totalPages = vaccines.length / itemsPerPage;
        const items = vaccines.slice(
            (page - 1) * itemsPerPage,
            (page - 1) * itemsPerPage + itemsPerPage
        );
        return (
            <>
                <MenuBar />
                <Header as='h2' icon textAlign='center'>
                    <Icon name='syringe' circular />
                    <Header.Content className="children-text">Vaccines</Header.Content>
                </Header>
                <Container>
                    {vaccines.length ?
                        <>
                            <Table singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                            id
                           </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            User Id
                            </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            Child firstName
                              </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            Type
                              </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            Vaccination Date
                              </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            createdAt
                              </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {_.map(items, ({ id, userId, type, vaccinationDate, createdAt, child: { firstName: childFirstName } }) => (
                                        <Table.Row key={id}>
                                            <Table.Cell>{id}</Table.Cell>
                                            <Table.Cell>{userId}</Table.Cell>
                                            <Table.Cell>{childFirstName}</Table.Cell>
                                            <Table.Cell>{type}</Table.Cell>
                                            <Table.Cell>{moment(vaccinationDate).format("dddd, MMMM Do YYYY")}</Table.Cell>
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
                            <p className="center-text">No Vaccines available, Please create..</p>
                        </Message>}
                </Container>
            </>
        )
    }
}

ViewVaccines.propTypes = {
    loading: PropTypes.bool,
    isAuth: PropTypes.bool,
    message: PropTypes.string,
};

const mapStateToProps = ({
    user: { profile },
    vaccin: { vaccines, getVaccins: { loading, message, errors } } }) => ({
        vaccines,
        profile,
        loading,
        message,
        errors
    });

export default connect(mapStateToProps, { get })(ViewVaccines);