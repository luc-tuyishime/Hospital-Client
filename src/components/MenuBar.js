import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu size='large'>
                <Menu.Item
                    name='browse'
                    active={activeItem === 'browse'}
                    onClick={this.handleItemClick}
                >
                    Hospital App
          </Menu.Item>


                <Menu.Menu position='right'>
                    <Dropdown text='Login' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header><Link to="/login-hospital">Hospital</Link></Dropdown.Header>
                            <Dropdown.Item><Link to="/login-user">User</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        )
    }
}
