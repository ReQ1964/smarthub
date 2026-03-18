import React from 'react';
import ContactMethods from './ContactMethods/ContactMethods';
import ContactForm from './ContactForm/ContactForm';
import classes from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <main className={classes.contactPage}>
      <ContactMethods />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
