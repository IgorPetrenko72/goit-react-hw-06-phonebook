import './Contactlist.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/slice';
import { getVisibleContacts, getContacts } from 'redux/selectors';



export function ContactList() {
    const contacts = useSelector(getContacts);
    const value = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    const filtersContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };
  const contactsMap = filtersContacts();

    return (
        <ul className='contactlist'>
          {contactsMap.map(({ id, name, number }) => (
              <li
                className='contactlist__item'
                key={id}>
                  <p>{name}: </p>
                   <p>{number}</p>
             <button
            className='btn'
            type="button"
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
            </button>
        </li>    
            ))}       
        </ul>
    );
};
