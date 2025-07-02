import React from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaLinkedin  } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";

import ContactList from '../components/ContactList'
import ContactForm from '../components/ContactForm'

const contacts = [
  {
    label: 'Phone',
    value: '+1 (647)914-8790',
    icon: <FaPhoneAlt />
  },
  {
    label: 'Email',
    value: 'derrickyiuct@gmail.com',
    icon: <MdEmail />
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/chuntingyiu',
    icon: <FaLinkedin />
  }
]

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