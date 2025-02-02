import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import ErrorText from './ErrorText/ErrorText';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOps';

const initialValues = {
  id: '',
  name: '',
  number: '',
};
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(nameRegExp, 'Name is not valid')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={s.form}>
        <div className={s.formGroup}>
          <label htmlFor="name" className={s.formLabel}>
            Name
          </label>
          <Field
            className={s.formInput}
            id="name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. 
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorText name="name" />
        </div>
        <div className={s.formGroup}>
          <label htmlFor="number" className={s.formLabel}>
            Number
          </label>
          <Field
            className={s.formInput}
            id="number"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorText name="number" />
        </div>
        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;