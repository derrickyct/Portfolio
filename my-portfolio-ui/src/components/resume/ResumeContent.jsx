import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import ResumeCard from './ResumeCard'
import PropTypes from 'prop-types'

const ResumeContent = ({ activeTab, tabs, data }) => {
  return (
    <div className="flex-1">
      { activeTab && activeTab !== 'about' && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">{ tabs.find(item => item.key === activeTab)?.label }</h2>
          <div className={`grid grid-cols-1 
            ${ activeTab === 'skills' ? 'sm:grid-cols-3 md:grid-cols-4' : 'md:grid-cols-2' }
          gap-6`}>
            <AnimatePresence>
              { data.map((item, idx) => (
                <ResumeCard key={ idx } data={ item } type={ activeTab } />
              )) }
            </AnimatePresence>
          </div>
        </motion.div>
      ) }
      { activeTab === 'about' && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            { tabs.find(item => item.key === activeTab)?.label }
          </h2>
          <div className="text-lg text-gray-400 text-left">
            { Array.isArray(data.paragraphs) && data.paragraphs.map((text, idx) => (
              <p key={ idx } className="mb-4">{ text }</p>
            )) }
          </div>
          <ul className="mt-12 space-y-3 text-gray-200 text-left">
            <li key={ 0 }>
              <span className="text-gray-400 mr-4">Experience</span>
              <span className="text-green-400 text-lg">{ data.experience }</span>
            </li>
            <li key={ 1 }>
              <span className="text-gray-400 mr-4">Languages</span>
              <span className="text-lg">{ data.languages.join(', ') }</span>
            </li>
            { Array.isArray(data.contacts) && data.contacts
              .filter(contact => ['Phone', 'Email'].includes(contact.label))
              .map((contact, idx) => (
              <li key={ idx + 2 }>
                <span className="text-gray-400 mr-4">{ contact.label }</span>
                <span className="text-lg">{ contact.value }</span>
              </li>
            )) }
          </ul>
        </motion.div>
      ) }
    </div>
  )
}

ResumeContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  data: PropTypes.oneOfType([
    // about
    PropTypes.shape({
      paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
      experience: PropTypes.string.isRequired,
      languages: PropTypes.string.isRequired,
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        })
      ).isRequired,
    }),
    // workExperiences, educations, skills
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          title: PropTypes.string,
          company: PropTypes.string,
          dates: PropTypes.string,
          description: PropTypes.string,
        }),
        PropTypes.shape({
          degree: PropTypes.string,
          institution: PropTypes.string,
          dates: PropTypes.string,
        }),
        PropTypes.shape({
          name: PropTypes.string,
          icon: PropTypes.elementType,
        }),
      ])
    )
  ]).isRequired
}

export default ResumeContent