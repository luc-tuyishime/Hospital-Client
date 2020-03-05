import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import MenuBar from '../../components/MenuBar';

import "../../styles/register.css";


class CreateVaccin extends Component {
    render() {
        return (
            <>
                <MenuBar />
                <div className="form-container">
                    <Form>
                        <h1>Create Vaccin</h1>
                        <Form.Input
                            label="Child ID"
                            placeholder="child id...."
                            name="childId"
                            type="text"
                        />
                        <Form.Input
                            label="Type"
                            placeholder="Vaccin Type...."
                            name="type"
                            type="text"
                        />
                        <Form.Input
                            label="Vaccination Date"
                            placeholder="date...."
                            name="date"
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




export default CreateVaccin;
