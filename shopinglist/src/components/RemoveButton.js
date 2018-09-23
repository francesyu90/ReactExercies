import React, { Component } from 'react';

class RemoveButtom extends Component {

    render() {
        return (
            <button onClick={this.props.deleteLastItem} disabled={this.props.noItemsFound()}>
                Delete Last Item
            </button>
        );
    }
}

export default RemoveButtom;