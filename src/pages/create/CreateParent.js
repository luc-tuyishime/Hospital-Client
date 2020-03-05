import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import MenuBar2 from '../../components/MenuBar2';

import "../../styles/register.css";


class CreateParent extends Component {
    render() {
        return (
            <>
                <MenuBar2 />
                <div className="form-container-inline">
                    <Form>
                        <h1>Create Parent</h1>
                        <Form.Group widths='equal'>

                            <Form.Input
                                label="firstName"
                                placeholder="firstName...."
                                name="firstName"
                                type="text"
                            />

                            <Form.Input
                                label="lastName"
                                placeholder="lastName...."
                                name="lastName"
                                type="text"
                            />

                        </Form.Group>
                        <Form.Group widths='equal'>

                            <Form.Input
                                label="email"
                                placeholder="Email...."
                                name="email"
                            />
                            <Form.Input
                                label="phone"
                                placeholder="phone...."
                                name="phone"
                                type="text"
                            />
                        </Form.Group>
                        <Button type="submit" primary>
                            Create
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
};



export default CreateParent;
