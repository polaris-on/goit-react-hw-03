import { useState, useEffect } from "react";
import "./App.css";
import contacts from "./assets/contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890", 3);

function App() {
  const savedContacts = localStorage.getItem("contacts");
  const initialContacts = savedContacts ? JSON.parse(savedContacts) : contacts;

  const [contactList, setContactList] = useState(initialContacts);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const handleSubmit = (data, actions) => {
    const newContact = {
      name: data.username,
      number: data.number,
      id: "id-" + nanoid(),
    };
    setContactList((prev) => [...prev, newContact]);

    actions.resetForm();
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = (id) => {
    setContactList((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <SearchBox handleSearch={handleSearch} searchQuery={searchQuery} />
        <ContactList
          handleDelete={handleDelete}
          contactList={filteredContacts}
        />
      </div>
    </>
  );
}

export default App;
