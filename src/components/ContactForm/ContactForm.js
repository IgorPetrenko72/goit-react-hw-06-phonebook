import React, { useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './ContactForm.css';

import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "redux/slice";
import { getContacts } from "redux/selectors";

export const ContactForm = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector (getContacts);

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const  handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('Danger');
    }
    };
 
  const handleSubmit = e => {
    e.preventDefault();

    const formSubmitHandler = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(contact => (name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) ||
      (number === contact.number))
      ? alert(`${name} is already in contacts`)
      : dispatch(addContacts(formSubmitHandler));
      reset();
    };

    const reset = () => {
      setName('')
      setNumber('')
    };
    
    return (
      <div className="form">
        <form
          onSubmit={handleSubmit}
        >
          <label className="label">Name
            <input
              className="input"
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className="label">Number
            <input
              className="input"
              type="tel"
              value={number}
              onChange={handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className="btn" type="submit">Add contact</button>
        </form>
      </div>
    );
  };

ContactForm.protoTypes = {
  addContact: PropTypes.func.isRequired,
};
