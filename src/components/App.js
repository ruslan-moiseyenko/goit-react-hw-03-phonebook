import React, { Component } from 'react';
import PhonebookAddingForm from './phonebookAddingForm/phonebookAddingForm';
import Contacts from './contacts/contacts';
import Filter from './filter/Filter';
import contactsInitial from './phonebookAddingForm/contacts.json';

class App extends Component {
  state = {
    contacts: contactsInitial,
    filter: '',
  };
  //
  submitHandler = data => {
    if (this.checkNameForMathces(data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => (
        { contacts: [...prevState.contacts, data] }
      )
      );
    }
  };

  checkNameForMathces = name => {
    return this.state.contacts.some(contact => contact.name === name);
  }


  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  deliteContactsItem = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredNames = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
      <>
        <h1>Phonebook</h1>
        <PhonebookAddingForm onSubmit={this.submitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} />
        <Contacts contacts={filteredNames} onDeliteContact={this.deliteContactsItem} />
      </>
    );
  }
}

export default App;
