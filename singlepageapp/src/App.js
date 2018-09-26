import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContacts from './components/ListContacts';
import CreateContact from './components/CreateContact';

const possibleScreens = ['list', 'create'];

class App extends Component {

    state = {
        screenIndex: 0 
    }

    handleClick = () => (
        this.setState((prevState) => ({
            screenIndex: (prevState.screenIndex === 0)? 1 : 0
        }))
    )
    
    render() {
          return(
                <div className="app">
                    { this.state.screenIndex === 0 && <ListContacts /> }
                    { this.state.screenIndex === 1  && <CreateContact /> }
                    <button onClick={this.handleClick}>
                        Change Screen
                    </button>
                </div>
          );
    }
}

export default App;
