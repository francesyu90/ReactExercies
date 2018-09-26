import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateContact extends Component {

    render() {
        return (
            <div>
                <h1>CreateContact</h1>
                <Link to="/">
                    Change Screen
                </Link>
            </div>
        )
    }
}

export default CreateContact;