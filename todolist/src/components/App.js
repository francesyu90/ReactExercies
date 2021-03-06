import React, { Component } from 'react';
import '../App.css';

import { connect } from 'react-redux';

import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import {
    handleInitialData
} from '../actions/shared';


class App extends Component {

    componentDidMount() {

        const { dispatch } = this.props;

        dispatch(handleInitialData());
    }

    render() {

        const { loading } = this.props;

        if (loading === true) {
            return <h3>Loading</h3>
        }

        return (
            <div className="App">
                <ConnectedTodos />
                <ConnectedGoals />
            </div>
        );
    }
}

export default connect((state) => ({
    loading: state.loading
}))(App);
