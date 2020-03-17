import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "semantic-ui-react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { logout } from '../actions/user';

import "../styles/register.css";


class MenuBar extends Component {

    logout = (e) => {
        e.preventDefault();
        const { logout } = this.props;
        logout();
    };

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const { isAuth, firstName, lastName } = this.props;
        return (
            <Menu icon size='large'>
                <Menu.Item
                    name='browse'
                    active={activeItem === 'browse'}
                    onClick={this.handleItemClick}
                >
                    Hospital App
          </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item color='olive'>
                        <Icon name='user' color='green' />
                        <div className="username">
                            {firstName || (firstName && lastName && `${firstName} ${lastName}`) || 'Welcome'}
                        </div>
                    </Menu.Item>
                    {!isAuth && (<Dropdown text='Login' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header><Link to="/login-hospital">Hospital</Link></Dropdown.Header>
                            <Dropdown.Item><Link to="/login-user">User</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>)}
                    {isAuth && (<Dropdown text='Parents' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header><Link to="/create-parent">Create</Link></Dropdown.Header>
                            <Dropdown.Item><Link to="/view-parent">View</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>)}
                    {isAuth && (<Dropdown text='Children' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header><Link to="/create-child">Create</Link></Dropdown.Header>
                            <Dropdown.Item><Link to="/view-children">View</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>)}
                    {isAuth && (<Dropdown text='Vaccines' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header><Link to="/create-vaccines">Create</Link></Dropdown.Header>
                            <Dropdown.Item><Link to="/view-vaccines">View</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>)}
                    {isAuth && (<Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.logout}
                        as={Link}
                        to="/login-hospital"
                    >
                        Logout
                    </Menu.Item>)}
                </Menu.Menu>
            </Menu>
        )
    }
}

MenuBar.propTypes = {
    logout: PropTypes.func,
    isAuth: PropTypes.bool,
    className: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
};

MenuBar.defaultProps = { isAuth: false };

const mapStateToProps = ({
    user: {
        isAuth,
        profile: { username, firstName, lastName, role }
    }
}) => ({
    isAuth,
    username,
    firstName,
    lastName,
    role
});

export default connect(mapStateToProps, { logout })(MenuBar);
