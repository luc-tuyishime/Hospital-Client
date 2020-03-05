import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
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
                    <Menu.Item
                        name='signup'
                        active={activeItem === 'signup'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/login-user"
                    >
                        Login User
            </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
