import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.newName,
      number: values.newNumber,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  const initialValues = {
    newName: '',
    newNumber: '',
  };

  const contactsSchema = Yup.object().shape({
    newName: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    newNumber: Yup.string()
      .matches(
        /^\+?[0-9\s\-()]{7,20}$/,
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
          <Field name="newName" type="text" placeholder="Viktor Romaniukov" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="newName" />
          </div>
        </label>

        <label className={css.label}>
          <span className={css.span}>Number:</span>
          <Field name="newNumber" type="tel" placeholder="000-00-00" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="newNumber" />
          </div>
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
