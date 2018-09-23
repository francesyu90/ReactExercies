import React, { Component } from 'react';
import './App.css';

import constants from './Constants'

import ListContacts from './components/ListContacts';

class App extends Component {

    state = {
        contacts: constants.contacts
    }

    removeContact = (contact) => {
        this.setState(currentState => ({
        contacts: currentState.contacts.filter(c => c.id !== contact.id)
        }))
    }

    render() {
        return  (
            <ListContacts contacts={this.state.contacts} removeContact={this.removeContact} />
        );
    }
}

export default App;
