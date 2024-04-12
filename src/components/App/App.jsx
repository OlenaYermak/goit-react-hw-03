import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm"

import { useState, useEffect } from "react";



export default function App() {

     const getInitialContactsData = () => {
    const savedContactsData = localStorage.getItem("contactsData");
    return  JSON.parse(savedContactsData) 
    }
    



 const [contacts, setContacts] = useState(getInitialContactsData);

    
    const addContacts = (newContact) => {
        setContacts((prevContacts) => { return [...prevContacts, newContact]; });
    };

       const deleteContacts = (contactId) => {
           setContacts((prevContacts) => { return prevContacts.filter((contact) => contact.id !== contactId);  });
    };
    
    const [filter, setFilter] = useState("");


   const visibleContacts = contacts ? contacts.filter(contact =>
     contact.name.toLowerCase().includes(filter.toLowerCase())
 ) : [];

     useEffect(()=>{
    localStorage.setItem("contactsData", JSON.stringify(contacts))
  } ,[contacts]);

    return (
        <div>
            <h1>Phonebook</h1>
            
            <ContactForm onAdd={addContacts } />
           
            <SearchBox value={filter} onFilter={ setFilter} />
            <ContactList contacts={visibleContacts } onDelete={deleteContacts} />
        </div>
    );
}

