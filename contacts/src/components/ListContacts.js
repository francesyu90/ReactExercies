import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        removeContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => (
        this.setState({
            query: query.trim()
        })
    )

    render() {

        return(
            <div>
                <div>
                    <input 
                        type = "text"
                        placeholder = "Search Contacts"
                        value = {this.state.query}
                        onChange = {(event) => this.updateQuery(event.target.value)}
                    />
                    {JSON.stringify(this.state)}
                </div>
                <ol>
                    {this.props.contacts.map((contact) => (
                        <li key={contact.id}>
                            {/* <div style ={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}></div> */}
                            <div>
                                <p>{contact.name}</p>
                                <p>@{contact.handle}</p>
                            </div>
                            <button onClick={() => this.props.removeContact(contact)} >
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }

}

export default ListContacts;