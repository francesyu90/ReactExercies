import React, { Component } from 'react';

class RemoveButtom extends Component {

    render() {

        const { deleteLastItem, noItemsFound } = this.props;

        return (
            <button onClick={ deleteLastItem } disabled={ noItemsFound() }>
                Delete Last Item
            </button>
        );
    }
}

export default RemoveButtom;