import React from 'react';
import PropTypes from 'prop-types';
import { LiContacts } from './Contacts.styled';

const Contacts = ({ contacts, onDeliteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) =>
        <LiContacts key={id}>{name} : {number}
          <button onClick={() => onDeliteContact(id)}> Delite</button>
        </LiContacts>
      )
      }
    </ul >
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
}
