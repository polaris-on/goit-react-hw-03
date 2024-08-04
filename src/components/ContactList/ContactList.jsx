import Contact from "../Contact/Contact";
import s from "./contact-list.module.css";

const ContactList = ({ contactList, handleDelete }) => {
  return (
    <div className={s.contactListWrapper}>
      <h2 className={s.subtitle}>Contact List</h2>
      <ul className={s.contactsList}>
        {contactList.map((contact) => (
          <Contact
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
