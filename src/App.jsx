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

  const [contact+List, setContactList] = useState(initialContacts);
  const [originalContactList, setOriginalContactList] =
    useState(initialContacts);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const handleSubmit = (data, actions) => {
    // console.log(data.username);
    const newContact = {
      name: data.username,
      number: data.number,
      id: "id-" + nanoid(),
    };
    console.log(newContact);
    setContactList((prev) => [...prev, newContact]);
    setOriginalContactList((prev) => [...prev, newContact]);

    console.log(contactList);
    actions.resetForm();
  };
  const [searchForm, setSearchForm] = useState({ search: "" });

  const handleSearch = ({ name, value }) => {
    setSearchForm({ [name]: value });
    setContactList((prev) =>
      originalContactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleDelete = (name) => {
    setContactList((prev) => prev.filter((contact) => contact.name !== name));
    setOriginalContactList((prev) =>
      prev.filter((contact) => contact.name !== name)
    );
  };

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <SearchBox
          handleSearch={handleSearch}
          searchValue={searchForm.search}
        />
        <ContactList handleDelete={handleDelete} contactList={contactList} />
      </div>
    </>
  );
}

export default App;
