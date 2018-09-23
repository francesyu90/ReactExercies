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

    resetQuery = () => (
       this.updateQuery('')
    )

    render() {

        const { query } = this.state;
        const { contacts, removeContact } = this.props;

        const showingContacts = query === '' ? 
            contacts : 
            contacts.filter((contact) => {
                return contact.name.toLowerCase().includes(query.toLowerCase())
            });

        return(
            <div>
                <div>
                    <input 
                        type = "text"
                        placeholder = "Search Contacts"
                        value = {query}
                        onChange = {(event) => this.updateQuery(event.target.value)}
                    />
                    {/* {JSON.stringify(this.state)} */}
                    {/* { showingContacts.length } */}
                </div>
                <div>
                    { showingContacts.length !== contacts.length && (
                        <div>
                            <span>
                                Show {showingContacts.length} of {contacts.length}
                            </span>
                            <button onClick={this.resetQuery}>Show all</button>
                        </div>
                    )}
                </div>
                <ol>
                    {showingContacts.map((contact) => (
                        <li key={contact.id}>
                            {/* <div style ={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}></div> */}
                            <div>
                                <p>{contact.name}</p>
                                <p>@{contact.handle}</p>
                            </div>
                            <button onClick={() => removeContact(contact)} >
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