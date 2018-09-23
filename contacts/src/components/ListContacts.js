import React, { Component } from 'react';

class ListContacts extends Component {

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

// const ListContacts = (props) => (
//     props.contacts.map(contact => (
//         <li key={contact.id}>
//             <div>
//                 <p>{contact.name}</p>
//                 <p>@{contact.handle}</p>
//             </div>
//             <button onClick={() => props.removeContact(contact)}>Remove</button>
//         </li>
//     ))
// );

export default ListContacts;