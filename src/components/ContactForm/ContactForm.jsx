import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./contact-form.module.css";
import * as Yup from "yup";

const ContactForm = ({ handleSubmit }) => {
  const addContactSchema = Yup.object({
    username: Yup.string()
      .required('Field "Name" is required!')
      .min(3, "The field must be longer than 3 characters!")
      .max(50, "The field must be less than 50 characters!"),
    number: Yup.string()
      .required('Field "Name" is required!')
      .matches(/^[0-9()+-]+$/, "Invalid phone number format")
      .required("Phone number is required")
      .min(3, "The field must be longer than 3 characters!")
      .max(20, "The field must be less than 20 characters!"),
  });

  const initialValues = {
    username: "",
    number: "",
  };
  return (
    <div className={s.contactForm}>
      <h2 className={s.title}>ContactForm</h2>

      <Formik
        validationSchema={addContactSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.labelWrapper}>
            <span className={s.label}>Name</span>
            <Field className={s.input} name="username" type="text" />
            <ErrorMessage
              name="username"
              component="span"
              className={s.error}
            />
          </label>
          <label className={s.labelWrapper}>
            <span className={s.label}>Number</span>
            <Field className={s.input} name="number" type="text" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
