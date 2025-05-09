import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispathc = useDispatch();

  const handleSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.newName,
      number: values.newNumber,
    };
    dispathc(addContact(newContact));
    options.resetForm();
  };

  const contactsSchema = Yup.object().shape({
    newName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    newNumber: Yup.string()
      .matches(
        /^\+?[0-9]{1,4}?[0-9]{3,14}(?:x.+)?$/,
        'Phone number is not valid'
      )
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <Form>
        <label className={css.label}>
          <span className={css.span}>Name:</span>
          <Field name="name" type="text" placeholder="Viktor Romaniukov" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="name" />
          </div>
        </label>

        <label className={css.label}>
          <span className={css.span}>Number:</span>
          <Field name="number" type="tel" placeholder="000-00-00" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="number" />
          </div>
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
