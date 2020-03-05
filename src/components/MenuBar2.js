import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuBar2 extends Component {
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
                    <Dropdown text='Parents' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header><Link to="/create-parent">Create</Link></Dropdown.Header>
                            <Dropdown.Item><Link to="/view-parent">View</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown text='Children' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header><Link to="/create-child">Create</Link></Dropdown.Header>
                            <Dropdown.Item><Link to="/view-children">View</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown text='Vaccines' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header><Link to="/create-vaccines">Create</Link></Dropdown.Header>
                            <Dropdown.Item><Link to="/view-vaccines">View</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/"
                    >
                        Logout
            </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
