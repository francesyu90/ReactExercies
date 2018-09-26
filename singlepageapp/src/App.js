import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContacts from './components/ListContacts';
import CreateContact from './components/CreateContact';
import {  Route } from 'react-router-dom';

class App extends Component {
    
    render() {
          return(
                <div className="app">
                    {/* { this.state.screenIndex === 0 && <ListContacts /> }
                    { this.state.screenIndex === 1  && <CreateContact /> } */}
                    <Route exact path="/" component={ListContacts} ></Route>
                    <Route exact path="/create" component={CreateContact} ></Route>
                </div>
          );
    }
}

export default App;
