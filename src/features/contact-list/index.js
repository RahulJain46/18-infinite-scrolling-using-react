import React from 'react'
import fetch from 'isomorphic-fetch'
import Contact from './contact'

class ContactList extends React.Component {
  state = {
    contacts: []
  }

  componentWillMount() {
    this.loadContacts()
  }

  loadContacts = () => {
    fetch('https://student-example-api.herokuapp.com/v1/contacts.json')
      .then(response => response.json())
      .then(json => this.setState({
        contacts: json.contacts
      }))
  }

  render() {
    return <ul className="contacts">
      {
        this.state.contacts.map(contact => <li key={contact.id}>
          <Contact {...contact} />
        </li>)
      }
    </ul>
  }
}

export default ContactList