import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListContacts extends Component {

    render() {
        return (
            <div>
                <h1>ListContacts</h1>
                <Link to="/create">
                    Change Screen
                </Link>
            </div>
        )
    }
}

export default ListContacts;