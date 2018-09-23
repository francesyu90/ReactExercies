import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        removeContact: PropTypes.func.isRequired
    }

    render() {

        return(
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
        );
    }

}

export default ListContacts;