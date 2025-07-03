import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const ResumeCard = ({ data, type }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }
  
  let titleText = ''
  let subtitleText = ''
  let dates = ''
  let description = ''
  // let listItems = []
  let icon = null
  let tooltipText = ''

  switch (type) {
    case 'work':
      titleText = data.title
      subtitleText = data.company
      dates = data.dates
      description = data.description
      // listItems = data.responsibilities || []
      break
    case 'education':
      titleText = data.degree
      subtitleText = data.institution
      dates = data.dates
      // listItems = data.achievements || []
      break
    case 'skills':
      // titleText = data.name
      subtitleText = data.level
      icon = data.icon
      tooltipText = data.details ? data.details.join(', ') : data.name
      break
    default:
      description = ''
  }

  return (
    <motion.div
      className="relative bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col items-start border-t-4 text-green-400 transform hover:scale-105 transition-transform duration-300 group text-left "
      variants={cardVariants}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Icon for Skills */}
      { type === 'skills' && icon && (
        <div className="w-full flex justify-center items-center text-6xl text-white group-hover:text-green-400 mb-3">
          { React.createElement(icon) }
        </div>
      ) }

      { dates && <p className="text-sm text-green-400 mb-4">{ dates }</p> }
      { titleText && <h3 className="text-xl sm:text-2xl font-bold text-indigo-100 mb-2">{ titleText }</h3> }
      <p className="text-md sm:text-lg text-white mb-1">{ subtitleText }</p>
      { description && description.length > 0 && (
        <ul className="list-disc text-white text-sm space-y-1 pl-4 marker:text-green-400">
          <li>
            { description && <p className="text-base text-white mt-5">{ description }</p> }
          </li>
        </ul>
      )}

      {/* Tooltip for Skills */}
      { type === 'skills' && tooltipText && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 bg-gray-700 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          { tooltipText }
        </div>
      ) }
    </motion.div>
  )
}

ResumeCard.propTypes = {
  data: PropTypes.oneOfType([
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
  ]).isRequired,
  type: PropTypes.oneOf(['work', 'education', 'skills']).isRequired
}

export default ResumeCard