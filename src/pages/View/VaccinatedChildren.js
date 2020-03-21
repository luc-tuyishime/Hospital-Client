import _ from 'lodash';
import React, { Component } from 'react';
import { Header, Icon, Table, Container, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { getVaccinationChildren } from '../../actions/child';
import MenuBar from '../../components/MenuBar';
import '../../styles/register.css';


class VaccinatedChildren extends Component {

    state = {
        vaccinatedChildren: []
    }

    componentDidMount = () => {
        const { getVaccinationChildren } = this.props;
        getVaccinationChildren();
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.setState({
            vaccinatedChildren: nextProps.vaccinatedChildren
        });

        return this.setState;
    };

    render() {
        const { vaccinatedChildren } = this.state
        return (
            <>
                <MenuBar />
                <Header as='h2' icon textAlign='center'>
                    <Icon name='syringe' circular />
                    <Header.Content className="children-text">Vaccinated Children</Header.Content>
                </Header>
                <Container>
                    {vaccinatedChildren.length ? <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    id
                           </Table.HeaderCell>
                                <Table.HeaderCell>
                                    User Id
                            </Table.HeaderCell>
                                <Table.HeaderCell>
                                    firstName
                              </Table.HeaderCell>
                                <Table.HeaderCell>
                                    lastName
                              </Table.HeaderCell>
                                <Table.HeaderCell>
                                    birth
                              </Table.HeaderCell>
                                <Table.HeaderCell>
                                    sex
                              </Table.HeaderCell>
                                <Table.HeaderCell>
                                    created At
                              </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {_.map(vaccinatedChildren, ({ id, userId, firstName, lastName, birth, sex, createdAt }) => (
                                <Table.Row key={id}>
                                    <Table.Cell>{id}</Table.Cell>
                                    <Table.Cell>{userId}</Table.Cell>
                                    <Table.Cell>{firstName}</Table.Cell>
                                    <Table.Cell>{lastName}</Table.Cell>
                                    <Table.Cell>{moment(birth).format("dddd, MMMM Do YYYY")}</Table.Cell>
                                    <Table.Cell>{sex}</Table.Cell>
                                    <Table.Cell>{moment(createdAt).format("dddd, MMMM Do YYYY")}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table> :
                        <Message info>
                            <p className="center-text">No Vaccinated children for now...</p>
                        </Message>}
                </Container>
            </>
        )
    }
}

VaccinatedChildren.propTypes = {
    loading: PropTypes.bool,
    isAuth: PropTypes.bool,
    message: PropTypes.string,
};

const mapStateToProps = ({
    user: { profile },
    child: { vaccinatedChildren, getVaccinated: { loading, message, errors } } }) => ({
        vaccinatedChildren,
        profile,
        loading,
        message,
        errors
    });

export default connect(mapStateToProps, { getVaccinationChildren })(VaccinatedChildren);