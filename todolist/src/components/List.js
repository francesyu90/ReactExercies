import React, { Component } from 'react';

class List extends Component {
    render() {

        const { items, toggle, remove } = this.props;

        return (
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <span
                            onClick = {() => toggle &&  toggle(item.id)}
                            style = {{textDecoration: item.complete ? 'line-through' : 'none'}}
                        >
                            {item.name}
                        </span>
                        <button onClick = {() => remove(item)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;