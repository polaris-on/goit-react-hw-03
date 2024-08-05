import Contact from "../Contact/Contact";
import s from "./contact-list.module.css";

const ContactList = ({ contactList, handleDelete, searchQuery }) => {
  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={s.contactListWrapper}>
      <h2 className={s.subtitle}>Contact List</h2>
      <ul className={s.contactsList}>
        {filteredContacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
