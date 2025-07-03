import React from 'react'

const ContactList = ({ contacts }) => {
  return (
    <ul>
      { contacts
        .filter(contact => ['Phone', 'Email', 'LinkedIn'].includes(contact.label))
        .map((contact, index) => (
          <li key={ index } className="flex items-center mb-4">
            {/* Icon */}
            <div className="flex justify-center items-center w-14 h-14 text-2xl bg-gray-800 shadow-lg rounded-md p-5 m-3 transform hover:scale-105 transition-transform duration-300 ">
              <span className="text-green-400">{ React.createElement(contact.icon) }</span>
            </div>
            
            {/* Information */}
            <div className="flex flex-col">
              <span className="font-semibold text-gray-400">{ contact.label }</span>
              <span className="text-white text-lg font-bold">{ contact.value }</span>
            </div>
          </li>
      )) }
    </ul>
  )
}

export default ContactList