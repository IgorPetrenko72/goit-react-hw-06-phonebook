import React from "react";
import { ContactForm  } from "./ContactForm/ContactForm"
import { ContactList } from "./Contactlist/ContactList";
import { Filter } from "./Filter/Filter";
import './ContactForm/ContactForm.css';

export const App = () => {

    return (
      <div className="phonebook">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList /> 
      </div>  
  );  
};
