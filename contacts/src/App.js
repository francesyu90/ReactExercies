import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

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

App.propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func
}

export default App;
