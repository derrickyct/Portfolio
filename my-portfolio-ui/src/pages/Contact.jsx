import React from 'react'

import { contacts } from '../constants/contacts';
import ContactList from '../components/contact/ContactList'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => {

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 text-left p-6 gap-8">
      {/* Contacts */}
      <ContactList contacts={ contacts } />

      {/* Contact Form */}
      <div className="max-w-xl">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact