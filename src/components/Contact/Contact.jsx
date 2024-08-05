import s from "./contact.module.css";

const Contact = ({ id, name, number, handleDelete }) => {
  return (
    <li className={s.contact}>
      <span className={s.name}>{name}:</span>{" "}
      <span className={s.number}>{number}</span>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
