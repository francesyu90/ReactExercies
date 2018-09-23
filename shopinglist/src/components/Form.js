import React, { Component } from 'react';

class Form extends Component {

    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    render() {

        const { value } = this.state;

        return (
            <form onSubmit={(event) => this.props.addItem(event, value)}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={value}
                    onChange={this.handleChange}
                />
                <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
        );
    }
}

export default Form;