import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import MenuBar2 from '../../components/MenuBar2';

import "../../styles/register.css";


class CreateChild extends Component {
    render() {
        return (
            <>
                <MenuBar2 />
                <div className="form-container-inline">
                    <Form>
                        <h1>Create Child</h1>
                        <Form.Group widths='equal'>

                            <Form.Input
                                label="FirstName"
                                placeholder="firstName...."
                                name="firstName"
                                type="text"
                            />

                            <Form.Input
                                label="LastName"
                                placeholder="lastName...."
                                name="lastName"
                                type="text"
                            />

                        </Form.Group>
                        <Form.Group widths='equal'>

                            <Form.Input
                                label="Birth"
                                placeholder="birth date...."
                                name="birth"
                            />
                            <Form.Input
                                label="Sex"
                                placeholder="sex...."
                                name="sex"
                                type="text"
                            />
                        </Form.Group>
                        <Form.Input
                            label="ParentId"
                            placeholder="Parent ID...."
                            name="parentId"
                            type="text"
                        />
                        <Button type="submit" primary>
                            Create
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
};



export default CreateChild;
