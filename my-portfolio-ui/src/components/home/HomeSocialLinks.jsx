import React from 'react'

const HomeSocialLinks = ({ contacts = [] }) => {
  return (
    <div className="flex gap-4 mt-2">
      { contacts
        .filter(contact => ['LinkedIn', 'Github'].includes(contact.label))
        .map((contact, index) => (
          <a
            key={ index }
            href={ contact.value }
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 border-2 p-4 rounded-full"
          >
            { React.createElement(contact.icon, { size: 20 }) }
          </a>
        )) }
    </div>
  )
}


export default HomeSocialLinks