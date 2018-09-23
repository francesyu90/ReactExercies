import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import RemoveButton from './components/RemoveButton';
import ListItems from './components/ListItems';

class App extends Component {

  state = {
    value: '',
    items: []
  };

  addItem = (event, item) => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };
  
  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  render() {

    const { items } = this.state;

    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <h2>Shopping List</h2>

        <Form addItem={ this.addItem }/>

        <RemoveButton deleteLastItem={ this.deleteLastItem } noItemsFound={ this.noItemsFound } />

        <ListItems items={ items }/>

      </div>
    );
  }
}

export default App;
